import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, FileUp, X, FileText, CheckCircle } from 'lucide-react';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  areaCode: string;
  phoneNumber: string;
  graduated: string;
  university: string;
  studyProgram: string;
  germanLevel: string;
  financingPlan: string;
  motivation: string;
  referralSource: string;
  highSchoolCertificate: File | null;
  degreeCertificate: File | null;
  transcripts: File | null;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  areaCode: '',
  phoneNumber: '',
  graduated: '',
  university: '',
  studyProgram: '',
  germanLevel: '',
  financingPlan: '',
  motivation: '',
  referralSource: '',
  highSchoolCertificate: null,
  degreeCertificate: null,
  transcripts: null,
};

// FileUpload Component
interface FileUploadProps {
  label: string;
  id: string;
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  id,
  file,
  onChange,
  error,
  required = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onChange(e.target.files[0]);
    }
  };

  const removeFile = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div
        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : error ? 'border-red-300' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="flex flex-col items-center justify-center py-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 mb-3 transition-colors duration-200"
            >
              Browse Files
            </button>
            
            <div className="text-sm text-gray-500 flex items-center">
              <FileUp className="w-4 h-4 mr-1" />
              <span>Drag and drop files here</span>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              id={id}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={removeFile}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-10 h-10 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

// ProgressBar Component
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  const steps = ['Personal Information', 'Qualifications', 'Documents'];
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`text-sm font-medium ${
              index + 1 <= currentStep ? 'text-blue-700' : 'text-gray-400'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-1">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium transition-colors duration-200 ${
              index + 1 <= currentStep 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// SuccessModal Component
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div 
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-scaleUp"
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-16 sm:w-16">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">
                  MasterEnrollmentFormlication Submitted Successfully
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thank you for your interest in studying in Germany! We have received your MasterEnrollmentFormlication and will review it shortly.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Our team will contact you via email with further instructions. Please check your inbox regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// EnrollmentForm Component
interface EnrollmentFormProps {
  onSuccess: () => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 3;
  
  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
      
      if (!formData.confirmEmail) newErrors.confirmEmail = 'Please confirm your email';
      else if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match';
    }
    
    if (step === 2) {
      if (!formData.graduated) newErrors.graduated = 'Please select an option';
      if (!formData.university) newErrors.university = 'University name is required';
      if (!formData.studyProgram) newErrors.studyProgram = 'Study program is required';
      if (!formData.germanLevel) newErrors.germanLevel = 'German language level is required';
      if (!formData.financingPlan) newErrors.financingPlan = 'Financing plan is required';
      if (!formData.motivation) newErrors.motivation = 'Motivation statement is required';
    }
    
    if (step === 3) {
      if (!formData.transcripts) newErrors.transcripts = 'Academic transcripts are required';
      if (!formData.referralSource) newErrors.referralSource = 'This field is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      onSuccess();
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="ex: email@yahoo.com"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
            Confirmation Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="confirmEmail"
            placeholder="example@example.com"
            value={formData.confirmEmail}
            onChange={(e) => updateFormData('confirmEmail', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.confirmEmail ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmEmail}</p>
          )}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Telephone Number</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="areaCode" className="block text-sm font-medium text-gray-500">
              Area Code
            </label>
            <input
              type="text"
              id="areaCode"
              value={formData.areaCode}
              onChange={(e) => updateFormData('areaCode', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData('phoneNumber', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderQualifications = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Your Profile, Qualification & German Language Skills
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Have you already graduated from university? If you have not yet graduated from university, please select "N/A."
            <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="graduated-yes"
                name="graduated"
                value="yes"
                checked={formData.graduated === 'yes'}
                onChange={() => updateFormData('graduated', 'yes')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="graduated-yes" className="ml-2 block text-sm text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="graduated-no"
                name="graduated"
                value="no"
                checked={formData.graduated === 'no'}
                onChange={() => updateFormData('graduated', 'no')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="graduated-no" className="ml-2 block text-sm text-gray-700">
                No (not yet graduated)
              </label>
            </div>
          </div>
          {errors.graduated && (
            <p className="mt-1 text-sm text-red-600">{errors.graduated}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700">
            At which university did you study or are you currently enrolled? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="university"
            value={formData.university}
            onChange={(e) => updateFormData('university', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.university ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.university && (
            <p className="mt-1 text-sm text-red-600">{errors.university}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="studyProgram" className="block text-sm font-medium text-gray-700">
            What would you like to study in Germany? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="studyProgram"
            value={formData.studyProgram}
            onChange={(e) => updateFormData('studyProgram', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.studyProgram ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.studyProgram && (
            <p className="mt-1 text-sm text-red-600">{errors.studyProgram}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What is the level of your German language? <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            {['A1/A2', 'B1', 'B2', 'C1/C2', 'I have no German language skills'].map((level) => (
              <div key={level} className="flex items-center">
                <input
                  type="radio"
                  id={`german-${level}`}
                  name="germanLevel"
                  value={level}
                  checked={formData.germanLevel === level}
                  onChange={() => updateFormData('germanLevel', level)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor={`german-${level}`} className="ml-2 block text-sm text-gray-700">
                  {level}
                </label>
              </div>
            ))}
          </div>
          {errors.germanLevel && (
            <p className="mt-1 text-sm text-red-600">{errors.germanLevel}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How do you plan to finance your education in Germany? <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            {[
              'Scholarship (I already have a scholarship)',
              'Scholarship (I need help to find a scholarship)',
              'Blocked Account (€11,904 per year)',
              'Formal Obligation (Issued by residents residing in Germany)',
              'Not yet decided'
            ].map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`financing-${option}`}
                  name="financingPlan"
                  value={option}
                  checked={formData.financingPlan === option}
                  onChange={() => updateFormData('financingPlan', option)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor={`financing-${option}`} className="ml-2 block text-sm text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
          {errors.financingPlan && (
            <p className="mt-1 text-sm text-red-600">{errors.financingPlan}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
            Please share your profile with us and state what motivates you to study in Germany. <span className="text-red-500">*</span>
          </label>
          <textarea
            id="motivation"
            rows={4}
            value={formData.motivation}
            onChange={(e) => updateFormData('motivation', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.motivation ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.motivation && (
            <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Documents Upload</h3>
      
      <div className="space-y-8">
        <FileUpload
          label="Kindly upload your high school certificate."
          id="highSchoolCertificate"
          file={formData.highSchoolCertificate}
          onChange={(file) => updateFormData('highSchoolCertificate', file)}
          error={errors.highSchoolCertificate}
          required={false}
        />
        
        <FileUpload
          label="Kindly upload your degree certificate."
          id="degreeCertificate"
          file={formData.degreeCertificate}
          onChange={(file) => updateFormData('degreeCertificate', file)}
          error={errors.degreeCertificate}
          required={false}
        />
        
        <FileUpload
          label="Kindly upload your academic transcripts."
          id="transcripts"
          file={formData.transcripts}
          onChange={(file) => updateFormData('transcripts', file)}
          error={errors.transcripts}
          required={true}
        />
      </div>
      
      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-base font-medium text-gray-800 mb-4">Consultation</h4>
        <p className="text-sm text-gray-600 mb-6">
          Please note that, depending on your qualifications, a consultation fee may be 
          MasterEnrollmentFormlicable to address your needs. This will be communicated to you after we review 
          your MasterEnrollmentFormlication. For certain opportunities, no consultation fee is required.
        </p>
        
        <div>
          <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700">
            How did you hear about us? <span className="text-red-500">*</span>
          </label>
          <select
            id="referralSource"
            value={formData.referralSource}
            onChange={(e) => updateFormData('referralSource', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 
              ${errors.referralSource ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Please select</option>
            <option value="Internet Search">Internet Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend">Friend or Family</option>
            <option value="Education Fair">Education Fair</option>
            <option value="University">University</option>
            <option value="Other">Other</option>
          </select>
          {errors.referralSource && (
            <p className="mt-1 text-sm text-red-600">{errors.referralSource}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      
      <form onSubmit={handleSubmit} className="mt-8">
        {currentStep === 1 && renderPersonalInfo()}
        {currentStep === 2 && renderQualifications()}
        {currentStep === 3 && renderDocuments()}
        
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Back
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Submit MasterEnrollmentFormlication
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// Main MasterEnrollmentForm Component
function MasterEnrollmentForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleModalClose = () => {
    setShowSuccess(false);
    setFormKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center py-8 px-4">
      <header className="w-full max-w-4xl flex items-center justify-center mb-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-blue-700 h-8 w-8" />
          <h1 className="text-3xl font-bold text-blue-900">German Masters Enrollment</h1>
        </div>
      </header>
      
      <main className="w-full max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 bg-primary-700 text-white">
            <h2 className="text-xl font-semibold">Enrollment for Master Programmes in Germany</h2>
            <p className="mt-2 text-blue-100">
              Are you interested in enrolling in master programs in Germany? Register your profile with us. 
              Once your registration is complete, we will review it. If you meet the requirements, 
              we will provide you with more information about the next steps.
            </p>
          </div>
          
          <EnrollmentForm key={formKey} onSuccess={handleSuccess} />
        </div>
      </main>
      
      <SuccessModal isOpen={showSuccess} onClose={handleModalClose} />
    </div>
  );
}

export default MasterEnrollmentForm;