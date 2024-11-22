import React, { useState } from "react";
import InputField from "./InputField";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    institutionalAffiliation: "",
    orcid: "",
    copyrightRegistration: "",
    articles: "",
    email: "",
    additionalArticles: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
  };

  return (
    <div className="form-container">
      <InputField
        label="Full Name"
        placeholder="Placeholder text"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />
      <InputField
        label="Institutional Affiliation"
        placeholder="Placeholder text"
        value={formData.institutionalAffiliation}
        onChange={(e) => handleChange("institutionalAffiliation", e.target.value)}
      />
      <InputField
        label="ORCID"
        placeholder="Placeholder text"
        value={formData.orcid}
        onChange={(e) => handleChange("orcid", e.target.value)}
      />
      <InputField
        label="Copyright Registration"
        placeholder="Placeholder text"
        value={formData.copyrightRegistration}
        onChange={(e) => handleChange("copyrightRegistration", e.target.value)}
      />
      <InputField
        label="Articles"
        placeholder="Placeholder text"
        value={formData.articles}
        onChange={(e) => handleChange("articles", e.target.value)}
      />
      <InputField
        label="Email"
        placeholder="Placeholder text"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <InputField
        label="Additional Articles"
        placeholder="Placeholder text"
        value={formData.additionalArticles}
        onChange={(e) => handleChange("additionalArticles", e.target.value)}
      />

      <div className="form-actions">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="publish-button">Publish</button>
      </div>
    </div>
  );
};

export default FormContainer;