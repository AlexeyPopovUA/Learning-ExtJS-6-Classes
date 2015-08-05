/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Example.Application', {
    extend: 'Ext.app.Application',

    name: 'Example',

    requires: [
        "Example.example.*"
    ],

    launch: function () {

        var parent = Ext.create("Example.example.Parent");
        var child = Ext.create("Example.example.Child");

        console.log("==============parent===========");


        console.log("parent", parent);
        console.log("parent.publicMethodParent()", parent.publicMethodParent());
        console.log("parent.publicPropertyParent", parent.publicPropertyParent);
        console.log("parent.staticPropertyParent", parent.staticPropertyParent);
        console.log("Example.example.Parent.staticPropertyParent", Example.example.Parent.staticPropertyParent);


        console.log("==============child===========");


        console.log("child", child);
        console.log("child.publicMethodChild()", child.publicMethodChild());
        console.log("child.publicMethodSeesStatics()", child.publicMethodSeesStatics());
        console.log("child.publicPropertyChild", child.publicPropertyChild);
        console.log("child.privateFunctionChild", child.privateFunctionChild);
        console.log("child.privatePropertyChild", child.privatePropertyChild);

        console.log("");

        console.log("child.callChildPublicFromPrivate() public->private->public", child.callChildPublicFromPrivate());
        console.log("child.callParentPublicFromPrivate() public->private->public", child.callParentPublicFromPrivate());
        console.log("child.callChildPrivateThis() public->private->public", child.callChildPrivateThis());
        console.log("child.callChildPrivateMe() public->private->public", child.callChildPrivateMe());

        console.log("");

        console.log("child.publicMethodSeesPrivate()", child.publicMethodSeesPrivate());
        console.log("Example.example.Child.staticPropertyChild", Example.example.Child.staticPropertyChild);


    }
});