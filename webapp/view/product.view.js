sap.ui.jsview("z_productz_product.view.product", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.product
	 */
	getControllerName: function() {
		return "z_productz_product.controller.product";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.product
	 */
	createContent: function(oController) {
		var oTable = new sap.ui.table.Table("tableId", {
			visibleRowCount: 5,
			editable: false
		});
		
/*		/*var sEntity = '/FLIGHT';
		
		var properties 
		var oMetaModel =*/

		oTable.addColumn(new sap.ui.table.Column({

			label: new sap.ui.commons.Label({
				text: "ID"
			}),
			visible: true,
			template: new sap.ui.commons.TextView({
				text: "{vuelos>Carrid}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({

			label: new sap.ui.commons.Label({
				text: "Name"
			}),
			visible: true,
			template: new sap.ui.commons.TextView({
				text: "{vuelos>Connid}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({

			label: new sap.ui.commons.Label({
				text: "Description"
			}),
			visible: true,
			template: new sap.ui.commons.TextView({
				text: "{vuelos>Fldate}"
			})
		}));

		oTable.bindRows("vuelos>/FLIGHTSet");

		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				oTable
			]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});