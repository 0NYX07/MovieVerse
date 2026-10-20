/* eslint-env jest */
require('react-native-gesture-handler/jestSetup');

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValue(true),
  isVisible: jest.fn().mockResolvedValue(false),
  useHideAnimation: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));
