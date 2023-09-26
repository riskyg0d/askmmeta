import React from 'react'
import { Services } from '../components/Services';
import { Banner } from '../components/Banner';
import BookACall from '../components/BookACall';
import { CaseStudy } from '../components/CaseStudy';
import AgencySpecializations from '../components/AgencySpecializations';


function HomeScreen() {
  return (
    <div>
      <Banner />
      <Services />
      <AgencySpecializations />
      <CaseStudy />
      <BookACall />
    </div>
  );
}

export default HomeScreen