sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"z_productz_product/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("z_productz_product.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		/*	var mConfig = this.getMetadata().getConfig();*/
			var sServiceUrl = this.getMetadata().getManifestEntry("sap.app").dataSources.z001_hello_world_srv_01.uri;

			// Create and set domain model to the component
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, {
				json: true,
/*				user: "ZUNISYS01",
				password: "ZUNISYS01",*/
				loadMetadataAsync: true
			});
			oModel.attachMetadataFailed(function() {
				this.getEventBus().publish("Component", "MetadataFailed");
			}, this);
			this.setModel(oModel, "vuelos");
		}
	});
});