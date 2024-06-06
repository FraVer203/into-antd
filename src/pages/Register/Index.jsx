import React from 'react';
import LayoutComponent from "../../components/Layout/LayoutComponent.jsx";
import ImageButton from "../../components/ImageButton/Index.jsx";
import FormRegister from "../../components/FormRegister/Index.jsx";

const Register = () => {
    return (
        <LayoutComponent
            leftColSize={{ xs: 24, sm: 12, md: 16, lg: 18 }}
            rightColSize={{ xs: 24, sm: 12, md: 8, lg: 6 }}
            leftContent={<ImageButton />}
            rightContent={<FormRegister />}
        />
    );
};

export default Register;
