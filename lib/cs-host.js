const _ = require('lodash');
const HostImplementation = require('@containership/containership.abstraction.host');
const ContainershipApi = require('@containership/containership.api-bridge');

class CSHost extends HostImplementation {
    constructor(core) {
        const attrs = core.cluster.legiond.get_attributes();
        super(core.options.mode, attrs.address.public, core.options['api-port']);
        this.privateIP = attrs.address.private;
        this.core = core;
    }

    getApi() {
        return new ContainershipApi(this.leaderIP, this.apiPort, this.privateIP, this.core);
    }

    getClusterId() {
        return this.core.cluster_id || this.core.options.cluster_id;
    }

    getOperatingMode() {
        return this.core.options.mode;
    }
}

module.exports = CSHost;
