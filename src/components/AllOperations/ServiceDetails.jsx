import React from 'react'
import { useParams } from 'react-router-dom';
import {services} from "./../../data/services"
import {Creditors} from "./Creditors"

export const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id.toString() === id);
console.log(service)
    if (!service) {
        console.error(`Service with id ${id} not found`);
       return <div>Service not found</div>;
    }
    try {
       const { titleS, secondTitle, info, message, isDoc, button, isText } = service;

       if (titleS === undefined) {
          console.error('titleS is undefined');
          return <div>Error occurred while rendering service details</div>;
      }

      return <Creditors titleS={titleS} secondTitle={secondTitle} info={info} message={message} button={button} isDoc={isDoc} isText={isText} />;
  } catch (error) {
      console.error('Error in ServiceDetails component:', error);
      return <div>Error occurred while rendering service details</div>;
  }}
