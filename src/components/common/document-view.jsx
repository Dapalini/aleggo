import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

const DocView = (props) => {
	console.log('hello');

	return (
		<DocViewer pluginRenderers={DocViewerRenderers} documents={props.docs} />
	);
};

export default DocView;
