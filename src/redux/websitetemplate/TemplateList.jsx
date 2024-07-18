import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "./TemplateSlice";
import CardTemplateDashboard from "../../components/dashboard/CardTemplateDashboard";
import LogoLoading from "../../components/loading/LogoLoading";

const TemplateList = () => {
  const dispatch = useDispatch();
  const { templates, status, error } = useSelector((state) => state.templates);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTemplates());
    }
  }, [status, dispatch]);

  const handleSelectTemplate = (templateName) => {
    alert(`Selected Template: ${templateName}`);
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const filteredTemplates = activeFilter === 'All'
    ? templates
    : templates.filter(template => template.name === activeFilter);

  if (error === "No access token found") {
    return <p className="text-red-500">Please log in to view templates.</p>;
  }

  return (
    <div>
      <div className="flex gap-4 mb-5">
        {['All', 'Developer', 'Photography', 'Business', 'Marketing'].map(filterName => (
          <button
            key={filterName}
            onClick={() => handleFilterClick(filterName)}
            className={`px-4 py-2 rounded-md border-2 ${
              activeFilter === filterName
                ? 'bg-primary text-white border-primary'
                : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {filterName}
          </button>
        ))}
      </div>
      {status === "loading" && <LogoLoading />}
      {status === "succeeded" && (
        <div className="flex flex-wrap gap-6 mt-5 justify-center">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex-1 min-w-[300px] max-w-[400px] md:min-w-[350px] lg:min-w-[300px]"
            >
              <CardTemplateDashboard
                imageSrc={template.image}
                title={template.name}
                onSelect={() => handleSelectTemplate(template.name)}
              />
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TemplateList;
