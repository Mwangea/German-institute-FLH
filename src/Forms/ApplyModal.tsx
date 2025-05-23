import React, { useState } from 'react';
//import axios from 'axios';
import { X, Upload, FileText } from 'lucide-react';
import apiClient from '../utils/apiClient';
//import apiClient from '../utils/apiClient'; 

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  idFile: File | null;
  programType: string;
  programModule: string;
}

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    idFile: null,
    programType: '',
    programModule: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const programOptions: Record<string, string[]> = {
    'Foreign Languages': [
      'German Courses',
      'English Courses',
      'French Courses',
      'Italian Courses'
    ],
    'Hospitality Management': [
      'Diploma in Hospitality Management',
      'Diploma in Front Office Operations & Administration',
      'Diploma in Food & Beverage Management',
      'Diploma in House Keeping & Laundry Operation',
      'Certificate in Front Office Operations',
      'Certificate in Food and Beverage Service & Sales',
      'Certificate in House Keeping & Laundry'
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files;
    
    if (files && files[0]) {
      handleFileSelect(files[0]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileSelect = (file: File) => {
    setFormData(prev => ({
      ...prev,
      idFile: file
    }));

    // Create preview URL for images
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      // Check if file type is allowed
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (allowedTypes.includes(file.type)) {
        handleFileSelect(file);
      } else {
        alert('Please upload a PDF, JPG, JPEG, or PNG file.');
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      idFile: null
    }));
    setPreviewUrl('');
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      programType: value,
      programModule: '' // Reset module when program changes
    }));
  };

  // Validation functions
  const isStep1Valid = (): boolean => {
    return !!(
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.age.trim() &&
      formData.gender &&
      formData.idFile
    );
  };

  const isStep2Valid = (): boolean => {
    return !!(
      formData.programType &&
      formData.programModule
    );
  };

  const isFormValid = (): boolean => {
    return isStep1Valid() && isStep2Valid();
  };

  const handleNextStep = () => {
    if (step === 1 && isStep1Valid()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const formPayload = new FormData();
      
      // Append all form data
      formPayload.append('firstName', formData.firstName);
      formPayload.append('lastName', formData.lastName);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('age', formData.age);
      formPayload.append('gender', formData.gender);
      if (formData.idFile) {
        formPayload.append('idFile', formData.idFile);
      }
      formPayload.append('programType', formData.programType);
      formPayload.append('programModule', formData.programModule);
  
      const response = await apiClient.post('/apply', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.error('Application error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup preview URL on unmount
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Application Form</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {success ? (
          <div className="p-6 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for applying to our institute. We've sent a confirmation to your email address.
              Our admissions team will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-primary-500 text-white px-6 py-2 rounded hover:bg-primary-600 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Enter your first name"
                      aria-label="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Enter your last name"
                      aria-label="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Enter your email address"
                    aria-label="Email Address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Enter your phone number"
                      aria-label="Phone Number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="16"
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Enter your age"
                      aria-label="Age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                    aria-label="Gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID Document*</label>
                  
                  {/* File Upload Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                      isDragOver 
                        ? 'border-primary-500 bg-primary-50' 
                        : formData.idFile 
                          ? 'border-green-300 bg-green-50' 
                          : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {!formData.idFile ? (
                      <label className="flex flex-col items-center justify-center cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-500 mb-2" />
                        <p className="text-sm text-gray-500 text-center">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PDF, JPG, JPEG, PNG (Max 10MB)
                        </p>
                        <input 
                          type="file" 
                          name="idFile"
                          onChange={handleChange}
                          required
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {previewUrl ? (
                              <div className="relative">
                                <img
                                  src={previewUrl}
                                  alt="ID Preview"
                                  className="w-16 h-16 object-cover rounded border"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 bg-gray-100 rounded border flex items-center justify-center">
                                <FileText className="w-6 h-6 text-gray-500" />
                              </div>
                            )}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {formData.idFile.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(formData.idFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-red-500 hover:text-red-700 p-1"
                            aria-label="Remove file"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        
                        {/* Preview for images */}
                        {previewUrl && (
                          <div className="mt-3">
                            <img
                              src={previewUrl}
                              alt="ID Document Preview"
                              className="w-full max-w-xs mx-auto rounded border shadow-sm"
                            />
                          </div>
                        )}
                        
                        {/* Option to replace file */}
                        <label className="inline-flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
                          <Upload size={16} />
                          <span>Replace file</span>
                          <input 
                            type="file" 
                            name="idFile"
                            onChange={handleChange}
                            className="hidden" 
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Program Selection</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Program Type*</label>
                  <select
                    name="programType"
                    value={formData.programType}
                    onChange={handleProgramChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                    aria-label="Program Type"
                  >
                    <option value="">Select Program Type</option>
                    <option value="Foreign Languages">Foreign Languages</option>
                    <option value="Hospitality Management">Hospitality Management</option>
                  </select>
                </div>

                {formData.programType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program Module*</label>
                    <select
                      name="programModule"
                      value={formData.programModule}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
                      aria-label="Program Module"
                    >
                      <option value="">Select Module</option>
                      {programOptions[formData.programType].map((module: string) => (
                        <option key={module} value={module}>{module}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 2 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid()}
                  className={`px-6 py-2 rounded transition ${
                    isStep1Valid() 
                      ? 'bg-primary-500 text-white hover:bg-primary-600' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`px-6 py-2 rounded transition ${
                    !isSubmitting && isFormValid()
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;