import React from 'react'
import Inputs from '../utils/Inputs'
import { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import TextArea from '../utils/TextArea';
import Notification from '../utils/Notification';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectField from '../utils/SelectField';
import FileField from '../utils/FileField';
import { appoinmentInitialState } from '../../Data/formData/appoinmentForm';
import useFileUploader from '../../hooks/useFileUploader';
import Loading from '../utils/Loading';

function AppoinmentForm() {

  const state = useLocation().state;
  const navigate = useNavigate()
  const { token, postHandler, posting, editHandler, updating, message } = useContext(GlobalState);

  const [formData, setFormData] = useState(appoinmentInitialState);
  const { fileLoading, uploadFile } = useFileUploader()

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const image = e.target.files[0];
      await uploadFile(image, setFormData);
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  useEffect(() => {
    if (state) {
      setFormData(state)
    }
  }, [state]);

  const handleCreateAppoinment = (e) => {
    e.preventDefault();

    if (!token) {
      const res = window.confirm("প্রথমে লগ ইন করুন")
      if (res) {
        navigate("/auth")
      }
      return
    }

    const POST_API = "/users-register/register"
    postHandler(POST_API, formData);
  }

  const handleUpdateAppoinment = (e) => {
    e.preventDefault();
    const UPDATE_API = `/users-register/update/${state._id}`
    editHandler(UPDATE_API, formData);
  }

  const required = state ? false : true

  return (
    <>
      <form
        onSubmit={
          state ?
            handleUpdateAppoinment
            : handleCreateAppoinment
        }
      >

        <h1 className=' text-xl md:text-2xl font-bold my-8'>
          {
            state ? "অ্যাপয়েন্টমেন্ট আপডেট করুন" : "এখানে অ্যাপয়েন্টমেন্ট অনুরোধ করুন"
          }
        </h1>

        {
          state &&
          <SelectField
            label="রক্ত দান সফল হয়েছে?"
            name="donationStatus"
            value={formData.donationStatus}
            required={required}
            handleChange={handleChange}
            defaultOption={"রক্ত দানের অবস্থা"}
            options={["yes", "no"]}
          />}

        {/* Patient Name */}
        <Inputs
          type="text"
          name="patientName"
          value={formData.patientName}
          required={required}
          placeholder="রোগীর নাম"
          handleChange={handleChange}
          label="রোগীর নাম লিখুন"
        />

        {/* Patient Age */}
        <Inputs
          type="number"
          name="patientAge"
          value={formData.patientAge}
          required={required}
          placeholder="রোগীর বয়স"
          handleChange={handleChange}
          label="রোগীর বয়স লিখুন"
        />

        {/* Contact Number */}
        <Inputs
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          required={required}
          placeholder="যোগাযোগ নম্বর"
          handleChange={handleChange}
          label="যোগাযোগ নম্বর লিখুন"
        />

        {/* Blood Group */}
        <SelectField
          label="রক্তের গ্রুপ"
          name="bloodGroup"
          value={formData.bloodGroup}
          required={required}
          handleChange={handleChange}
          defaultOption={"রক্তের গ্রুপ নির্বাচন করুন"}
          options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
        />

        {/* Problem Description */}
        <Inputs
          type="text"
          name="problem"
          value={formData.problem}
          required={required}
          placeholder="রোগ কী?"
          handleChange={handleChange}
          label="রোগীর সমস্যা বর্ণনা করুন"
        />

        {/* How Many Bags of Blood */}
        <Inputs
          type="number"
          name="howMuch"
          value={formData.howMuch}
          required={required}
          placeholder="ব্লাডের ব্যাগ সংখ্যা"
          handleChange={handleChange}
          label="কত ব্যাগ রক্ত প্রয়োজন?"
        />

        {/* Preferred Donation Date */}
        <Inputs
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          required={required}
          placeholder="পছন্দের রক্তদান তারিখ"
          handleChange={handleChange}
          label="রক্তদান করার পছন্দসই তারিখ?"
        />

        {/* Need Time */}
        <Inputs
          type="time"
          name="needTime"
          value={formData.needTime}
          required={required}
          placeholder="যে সময়ে রক্ত প্রয়োজন"
          handleChange={handleChange}
          label="রক্তের প্রয়োজনীয় সময়?"
        />

        {/* Where is the Blood Needed */}
        <Inputs
          type="text"
          name="location"
          value={formData.location}
          required={required}
          placeholder="স্থান নাম"
          handleChange={handleChange}
          label="রক্ত কোথায় প্রয়োজন?"
        />

        {/* Hospital/Medical Center */}
        <Inputs
          type="text"
          name="hospital"
          value={formData.hospital}
          required={required}
          placeholder="হাসপাতাল নাম"
          handleChange={handleChange}
          label="হাসপাতাল/মেডিক্যাল সেন্টারের নাম"
        />

        {/* Urgency Level */}
        <SelectField
          label="অ্যাপয়েন্টমেন্টের জরুরি স্তর"
          name="urgency"
          value={formData.urgency}
          required={required}
          handleChange={handleChange}
          options={["Normal", "Urgent", "Critical"]}
        />

        {/* Doctor's Contact Information */}
        <Inputs
          type="text"
          name="doctorContact"
          value={formData.doctorContact}
          required={false}
          placeholder="ডাক্তারের যোগাযোগ তথ্য"
          handleChange={handleChange}
          label="ডাক্তারের যোগাযোগ তথ্য (ঐচ্ছিক)"
        />

        {/* Upload Patient Photo */}
        <FileField
          name="photo"
          label={fileLoading ? "আপলোড হচ্ছে . . ." : "রোগীর ছবি আপলোড করুন"}
          required={false}
          handleChange={handleChange}
        />

        {/* Additional Message */}
        <TextArea
          type="text"
          name="message"
          value={formData.message}
          required={required}
          placeholder="বার্তা"
          handleChange={handleChange}
          label="রোগীর অবস্থার সম্পর্কে অতিরিক্ত তথ্য"
        />

        {/* Submit Button */}
        <button disabled={fileLoading} className="w-full py-4 px-7 rounded-sm text-xl font-medium primaryBg2 hover:secondaryBg">
          {posting || updating ? <Loading /> : state ? "এখন আপডেট করুন" : "এখন সাবমিট করুন"}
        </button>

        {/* Notification for any messages */}
        {message && <Notification />}
      </form>
    </>
  )
}

export default AppoinmentForm
