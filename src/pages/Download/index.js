import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import RNFS from 'react-native-fs';
let jobId;
import commonStyles from '@/assets/styles/common';

function Download() {
	const [ progress, setProgress ] = useState(0);

	function startDownload() {
		const downloadDest = `${Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath}/1.mp4`;
        const formUrl = 'http://172.30.102.6:8080/liziqi.mp4';
		const options = {
            fromUrl: formUrl,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
				console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {
				let pro = res.bytesWritten / res.contentLength;
				console.log()
				setProgress(pro);
			}
		};
		
		try {
            const ret = RNFS.downloadFile(options, 0);
            ret.promise.then(res => {
                console.log('success', res);
				setProgress(1);
				
                console.log('file://' + downloadDest)

                // 例如保存图片
            }).catch(err => {
                console.log('err', err);
            });
        }
        catch (e) {
            console.log(error);
        }
	}

	function stopDownload() {
		RNFS.stopDownload()
	}

	return (
		<View style={commonStyles.page}>
			<Text>download page</Text>
			{/* <Text>{progress}</Text>
            <Button
				onPress={startDownload}
				title="开始下载"
			/>
			<Button
				onPress={stopDownload}
				title="暂停下载"
			/> */}
		</View>
	);
}
export default Download;