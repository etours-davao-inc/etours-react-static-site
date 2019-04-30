import React from 'react';
import Responsive from 'react-responsive';

export const Mobile = props => <Responsive {...props} maxWidth={575} />
export const Desktop = props => <Responsive {...props} minWidth={576} />