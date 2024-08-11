import React from 'react';
import Section from '../../Components/Section Title/Section';
import A_positive from"../../assets/Blood Group/a+.png"
import B_positive from"../../assets/Blood Group/b+.png"
import O_positive from"../../assets/Blood Group/o+.png"
import AB_positive from"../../assets/Blood Group/ab+.png"
import A_Neagtive from"../../assets/Blood Group/-a.png"
import B_Neagtive from"../../assets/Blood Group/-b.jfif"
import O_Neagtive from"../../assets/Blood Group/o-.jfif"
import AB_Negtive from"../../assets/Blood Group/ab-.jfif"

const Blood = () => {
    const bloodGroup = [
        { name: "A+", image: A_positive },
        { name: "B+", image: B_positive },
        { name: "O+", image: O_positive },
        { name: "AB+", image: AB_positive },
        { name: "A-", image: A_Neagtive },
        { name: "B-", image: B_Neagtive },
        { name: "O-", image: O_Neagtive },
        { name: "AB-", image: AB_Negtive },
    ];
    return (
      <>
      <div>
        <Section Title={"Find Your Blood"} Subtitle={"blood can happy your life so its need to help us"}></Section>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {bloodGroup?.map((bloodGroup, index) => (
                    <div key={index}>
                        <img className='h-[234px] w-[225px]' src={bloodGroup.image} alt={bloodGroup.name} />
                        
                    </div>
                ))}
            </div>
      </>
    );
};

export default Blood;