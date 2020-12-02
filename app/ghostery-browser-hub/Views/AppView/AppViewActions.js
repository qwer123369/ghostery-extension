/**
 * Ghostery Browser Hub App View Action creators
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2020 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import { SET_TOAST } from './AppViewConstants';

export default function setToast(data) {
	return {
		type: SET_TOAST,
		data,
	};
}
