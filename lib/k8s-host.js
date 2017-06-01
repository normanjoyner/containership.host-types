const _ = require('lodash');
const HostImplementation = require('@jeremykross/containership.abstraction.host');
const { KubernetesApi } = require('@jeremykross/containership.k8s.api-bridge');

class K8SHost extends HostImplementation {
    constructor(mode, leaderIP, apiPort, organizationId, clusterId) {
        super(mode, leaderIP, apiPort);
        this.organizationId = organizationId;
        this.clusterId = clusterId;
        this.attrs = {}
    }

    getApi() {
        return new KubernetesApi(this.getApiIP(), 8080);
    }

    getAttributes() {
        return this.attrs;
    }

    setAttributes(attrs) {
        this.attrs = _.merge(this.attrs, attrs);
    }

    getClusterId() {
        return this.clusterId;
    }

    discoverPeers(cidr, cb) {

    }

}

module.exports = K8SHost;
