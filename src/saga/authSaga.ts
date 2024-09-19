import { takeLatest } from '@redux-saga/core/effects';
import { checkSSOSuccess } from '@/redux/slices/auth';
export default function* authSagas() {
	yield takeLatest(checkSSOSuccess, function* () {});
}
