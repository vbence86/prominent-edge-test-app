import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import Incident from './Incident';

class IncidentLoader extends PureComponent {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const callback = this.props.onLoad;
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;

        if (!fileAsBinaryString) return;
        if (typeof callback !== 'function') return;

        callback(new Incident(JSON.parse(fileAsBinaryString)));
      };
      reader.onabort = () => alert('File reading was aborted');
      reader.onerror = () => alert('File reading has failed');
      reader.readAsBinaryString(file);
    });     
  }

  render() {
    return <Dropzone onDrop={this.onDrop}>
      {({getRootProps, getInputProps, isDragActive}) => {
        return (
          <div
            {...getRootProps()}
            className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
          >
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop files here...</p> :
                <p>Try dropping some files here, or click to select files to upload.</p>
            }
          </div>
        )
      }}
    </Dropzone>
  }
}

export { IncidentLoader };
export default IncidentLoader;
