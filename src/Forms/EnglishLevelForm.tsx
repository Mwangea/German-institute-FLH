import { useForm } from "react-hook-form";
import { useState } from "react";
import { AxiosProgressEvent } from "axios";
import { Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import apiClient from "../utils/apiClient";

interface FormData {
  firstName: string;
  lastName: string;
  idNumber: string;
  email: string;
  phone: string;
  studyMode: string;
  idCopy: FileList;
  academicCertificates?: FileList;
  agreeTerms: boolean;
}

interface EnglishLevelFormProps {
  level: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const EnglishLevelForm = ({ level }: EnglishLevelFormProps) => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const studyModes = [
    "In-Person (Nairobi)",
    "Online (Live Sessions)",
    "Hybrid (Flexible)"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const formData = new FormData();
      
      // Append all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "idCopy" && key !== "academicCertificates") {
          formData.append(key, String(value));
        }
      });
      
      // Append files if they exist
      if (data.idCopy[0]) {
        formData.append("idCopy", data.idCopy[0]);
      }
      
      if (data.academicCertificates?.[0]) {
        formData.append("academicCertificates", data.academicCertificates[0]);
      }

      // Add the selected course level
      formData.append("courseLevel", level);

      const response = await apiClient.post(
        "/apply/english", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress({
                ...uploadProgress,
                [progressEvent.event.target.name]: percentCompleted,
              });
            }
          },
        }
      );

      if (response.status === 200) {
        setSubmissionSuccess(true);
        // Reset form after successful submission
        reset();
        // Reload the page after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error: unknown) {
      console.error("Submission error:", error);
      const apiError = error as ApiError;
      setSubmitError(apiError.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, maxSize: number) => {
    if (e.target.files && e.target.files[0]?.size > maxSize) {
      alert(`File size should be less than ${maxSize / (1024 * 1024)}MB`);
      e.target.value = "";
    }
  };

  const getFileSize = (file: File | undefined): string => {
    if (!file) return '';
    return `(${Math.round(file.size / 1024)} KB)`;
  };

  if (submissionSuccess) {
    return (
      <div className="bg-green-50 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Registration Successful!
        </h3>
        <p className="text-green-700">
          We've received your application for English {level}. Our team will 
          contact you within 48 hours with enrollment details.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Page will reload in a few seconds...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700">{submitError}</p>
          </div>
        </div>
      )}
      
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Personal Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
            National ID/Passport Number *
          </label>
          <input
            id="idNumber"
            type="text"
            {...register("idNumber", { 
              required: "ID number is required",
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Invalid ID format (letters and numbers only)"
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.idNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.idNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.idNumber.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\- ]+$/,
                  message: "Invalid phone number"
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. +254700123456"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Course Information
        </h3>
        
        <div>
          <label htmlFor="courseLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Selected Course Level
          </label>
          <input
            id="courseLevel"
            type="text"
            value={level}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="studyMode" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Study Mode *
          </label>
          <select
            id="studyMode"
            {...register("studyMode", { required: "Study mode is required" })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.studyMode ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select study mode</option>
            {studyModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
          {errors.studyMode && (
            <p className="mt-1 text-sm text-red-600">{errors.studyMode.message}</p>
          )}
        </div>
      </div>

      {/* Document Uploads */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Required Documents
        </h3>
        
        <div>
          <label htmlFor="idCopy" className="block text-sm font-medium text-gray-700 mb-1">
            ID/Passport Copy (PDF/Image) *
          </label>
          <div className="flex items-center">
            <input
              id="idCopy"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              {...register("idCopy", { 
                required: "ID copy is required",
                onChange: (e) => handleFileChange(e, 5 * 1024 * 1024)
              })}
            />
            <button
              type="button"
              onClick={() => {
                const input = document.getElementById('idCopy') as HTMLInputElement;
                input?.click();
              }}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 flex items-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              {watch("idCopy")?.[0]?.name || "Choose File"}
            </button>
            {watch("idCopy")?.[0]?.name && watch("idCopy")?.[0]?.size && (
              <span className="ml-2 text-sm text-gray-500">
                {getFileSize(watch("idCopy")?.[0])}
              </span>
            )}
          </div>
          {errors.idCopy && (
            <p className="mt-1 text-sm text-red-600">{errors.idCopy.message?.toString()}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Max 5MB (PDF, JPG, PNG)
          </p>
        </div>

        <div>
          <label htmlFor="academicCertificates" className="block text-sm font-medium text-gray-700 mb-1">
            Academic Certificates (PDF/Image)
          </label>
          <div className="flex items-center">
            <input
              id="academicCertificates"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              {...register("academicCertificates", {
                onChange: (e) => handleFileChange(e, 10 * 1024 * 1024)
              })}
            />
            <button
              type="button"
              onClick={() => {
                const input = document.getElementById('academicCertificates') as HTMLInputElement;
                input?.click();
              }}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 flex items-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              {watch("academicCertificates")?.[0]?.name || "Choose File"}
            </button>
            {watch("academicCertificates")?.[0]?.name && (
              <span className="ml-2 text-sm text-gray-500">
                {getFileSize(watch("academicCertificates")?.[0])}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Optional, max 10MB (PDF, JPG, PNG)
          </p>
        </div>
      </div>

      {/* Review and Submit */}
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            id="agreeTerms"
            type="checkbox"
            {...register("agreeTerms", { 
              required: "You must agree to the terms" 
            })}
            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
            I certify that all information provided is accurate and complete. I agree to the 
            <a href="/terms" className="text-primary-600 hover:underline"> Terms of Service</a> and 
            <a href="/privacy" className="text-primary-600 hover:underline"> Privacy Policy</a>.
          </label>
        </div>
        {errors.agreeTerms && (
          <p className="mt-1 text-sm text-red-600">{errors.agreeTerms.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 w-full px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-button-50 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
              Submitting...
            </>
          ) : (
            "Complete Registration"
          )}
        </button>
      </div>
    </form>
  );
};

export default EnglishLevelForm; 