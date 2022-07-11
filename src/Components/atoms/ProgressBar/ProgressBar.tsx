import React from 'react';
import styled from '@emotion/styled';

export interface ProgressBarProps {
    progress?: number;
}

const ProgressBarComponent = ({progress} : ProgressBarProps) => {
    
    const StyledDiv = styled('div')({
        width: '100%',
        height: '15px',
        backgroundColor: '#f1f6f4',
        border: '1px',
        borderRadius: '8px',
        boxSizing: 'border-box',
    })

    const progressed = 
    progress !== undefined && progress !== null ? `${progress}%` : '100%';
    
    const InnerDiv = styled('div') ({
        width: progressed,
        height: '15px',
        backgroundColor: '#E1ECFC'
    })

    return (
        <StyledDiv data-testid="progressBar">
            <InnerDiv data-testid="progressBar"/>
        </StyledDiv>
    )
}

export default ProgressBarComponent;