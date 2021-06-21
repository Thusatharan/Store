import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import Header from '../../../../components/shared/ReportHeader';

import All from './All';
import Month from './Month';
import Day from './Day';

function index({navigation}) {
  const [indexLength, setIndexLength] = React.useState(3);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [title, setTitle] = React.useState();
  const [renderItem, setRenderItem] = React.useState();

  React.useEffect(() => {
    switch (currentIndex) {
      case 1:
        setTitle('Today');
        setRenderItem(() => <Day />);
        break;
      case 2:
        setTitle('Month');
        setRenderItem(() => <Month />);
        break;
      case 3:
        setTitle('All');
        setRenderItem(() => <All />);
        break;
    }
  }, [currentIndex, setTitle]);

  const onClickNext = React.useCallback(() => {
    setCurrentIndex((prevCount) =>
      indexLength === prevCount ? 1 : prevCount + 1,
    );
  }, [currentIndex]);

  const onClickPrev = React.useCallback(() => {
    setCurrentIndex((prevCount) => (currentIndex === 1 ? 3 : prevCount - 1));
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <Header
          title={title}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
        {renderItem}
      </View>
    </SafeAreaView>
  );
}

export default index;
