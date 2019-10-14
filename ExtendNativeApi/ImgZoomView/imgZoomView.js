import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


React.Component.prototype.state.showZoomView = false
React.Component.prototype.hideZoomView = function(){
    this.setState({
        showZoomView: false
    })
}
React.Component.prototype.zoomView = function(viewImages) {
    return (
        <Modal
            visible={this.state.showZoomView}
            transparent={true}
        >
            <ImageViewer imageUrls={viewImages}  onClick={()=>this.hideZoomView()}/>
        </Modal>
    );
};
