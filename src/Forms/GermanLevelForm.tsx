import { useState, useRef, ChangeEvent } from 'react';
import { CheckCircle, X, Upload, Loader2 } from 'lucide-react';
import apiClient from '../utils/apiClient';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  classTime: string;
  idNumber: string;
  idPhoto: File | null;
}

const GermanLevelForm = ({ level }: { level: string }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    classTime: '',
    idNumber: '',
    idPhoto: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        setError('Please upload a JPEG or PNG image');
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        setError('File size should be less than 2MB');
        return;
      }

      setError(null);
      setFormData(prev => ({ ...prev, idPhoto: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setFormData(prev => ({ ...prev, idPhoto: null }));
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.gender !== '' &&
      formData.age !== '' &&
      formData.classTime !== '' &&
      formData.idNumber.trim() !== '' &&
      formData.idPhoto !== null
    );
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      age: '',
      classTime: '',
      idNumber: '',
      idPhoto: null
    });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
  
    setIsLoading(true);
    setError(null);
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('classTime', formData.classTime);
      formDataToSend.append('idNumber', formData.idNumber);
      formDataToSend.append('level', level);
      if (formData.idPhoto) {
        formDataToSend.append('idPhoto', formData.idPhoto);
      }
  
      const response = await apiClient.post('/apply/german-courses', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status !== 200) {
        throw new Error('Upload failed. Try again later.');
      }
  
      setIsSubmitted(true);
      resetForm();
    } catch (err) {
      console.error('Upload error:', err);
      setError('Upload failed. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Registration Successful!</h3>
        <p className="text-green-600 mb-4">
          Thank you for registering for German Level {level}. We've sent a confirmation to {formData.email}.
        </p>
        <p className="text-gray-600">Our team will contact you shortly with further details.</p>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender *
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="12"
            max="99"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="classTime" className="block text-sm font-medium text-gray-700 mb-1">
          Select Class Time *
        </label>
        <select
          id="classTime"
          name="classTime"
          value={formData.classTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select Class Time</option>
          <option value="morning">Morning (9:30 am - 1:00 pm)</option>
          <option value="afternoon">Afternoon (1:30 pm - 5:00 pm)</option>
        </select>
      </div>

      <div>
        <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
          ID/Passport Number *
        </label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload ID/Passport Photo *
        </label>
        <div className="mt-1 flex items-center">
          {previewUrl ? (
            <div className="relative">
              <img 
                src={previewUrl} 
                alt="ID preview" 
                className="h-32 w-auto rounded-md object-contain border border-gray-300"
              />
              <button
              title='remove-photo'
                type="button"
                onClick={removePhoto}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    JPEG or PNG (Max 2MB)
                  </p>
                </div>
                <input
                  id="idPhoto"
                  name="idPhoto"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png"
                  className="hidden"
                  required
                />
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!isFormValid() || isLoading}
          className={`w-full py-3 px-4 text-white font-medium rounded-md transition-colors flex items-center justify-center ${
            isFormValid() && !isLoading
              ? 'bg-button-50 hover:bg-orange-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            `Register for German Level ${level}`
          )}
        </button>
      </div>

      {error && (
        <div className="text-sm text-red-600 mt-2 text-center">
          {error}
        </div>
      )}
    </form>
  );
};

export default GermanLevelForm;