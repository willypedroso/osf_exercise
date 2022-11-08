import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const weatherWidget = props => {
  return (
    <Styled id="weatherWidget" css={css}>
      <div className="weatherWidget"> Base Component weatherWidget: {t('Hello')}</div>
    </Styled>
  );
};

export default weatherWidget;
