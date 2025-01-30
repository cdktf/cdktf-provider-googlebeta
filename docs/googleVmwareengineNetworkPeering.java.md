# `googleVmwareengineNetworkPeering` Submodule <a name="`googleVmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetworkPeering <a name="GoogleVmwareengineNetworkPeering" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeering;

GoogleVmwareengineNetworkPeering.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerNetwork(java.lang.String)
    .peerNetworkType(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .description(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean)
//  .exportCustomRoutes(IResolvable)
//  .exportCustomRoutesWithPublicIp(java.lang.Boolean)
//  .exportCustomRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean)
//  .importCustomRoutes(IResolvable)
//  .importCustomRoutesWithPublicIp(java.lang.Boolean)
//  .importCustomRoutesWithPublicIp(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleVmwareengineNetworkPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#name GoogleVmwareengineNetworkPeering#name}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.peerNetwork"></a>

- *Type:* java.lang.String

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#peer_network GoogleVmwareengineNetworkPeering#peer_network}

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.peerNetworkType"></a>

- *Type:* java.lang.String

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#peer_network_type GoogleVmwareengineNetworkPeering#peer_network_type}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork"></a>

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#vmware_engine_network GoogleVmwareengineNetworkPeering#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#description GoogleVmwareengineNetworkPeering#description}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#export_custom_routes GoogleVmwareengineNetworkPeering#export_custom_routes}

---

##### `exportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#export_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#import_custom_routes GoogleVmwareengineNetworkPeering#import_custom_routes}

---

##### `importCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#import_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#timeouts GoogleVmwareengineNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes">resetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp">resetExportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes">resetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp">resetImportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(GoogleVmwareengineNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExportCustomRoutes` <a name="resetExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes"></a>

```java
public void resetExportCustomRoutes()
```

##### `resetExportCustomRoutesWithPublicIp` <a name="resetExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp"></a>

```java
public void resetExportCustomRoutesWithPublicIp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetImportCustomRoutes` <a name="resetImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes"></a>

```java
public void resetImportCustomRoutes()
```

##### `resetImportCustomRoutesWithPublicIp` <a name="resetImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp"></a>

```java
public void resetImportCustomRoutesWithPublicIp()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeering;

GoogleVmwareengineNetworkPeering.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeering;

GoogleVmwareengineNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeering;

GoogleVmwareengineNetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeering;

GoogleVmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVmwareengineNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput">exportCustomRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput">importCustomRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput">peerNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput">peerNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput">vmwareEngineNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts"></a>

```java
public GoogleVmwareengineNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```java
public java.lang.String getVmwareEngineNetworkCanonical();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput"></a>

```java
public java.lang.Object getExportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getExportCustomRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput"></a>

```java
public java.lang.Object getImportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getImportCustomRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkInput`<sup>Optional</sup> <a name="peerNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput"></a>

```java
public java.lang.String getPeerNetworkInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkTypeInput`<sup>Optional</sup> <a name="peerNetworkTypeInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput"></a>

```java
public java.lang.String getPeerNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

---

##### `vmwareEngineNetworkInput`<sup>Optional</sup> <a name="vmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput"></a>

```java
public java.lang.String getVmwareEngineNetworkInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importCustomRoutesWithPublicIp`<sup>Required</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType"></a>

```java
public java.lang.String getPeerNetworkType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkPeeringConfig <a name="GoogleVmwareengineNetworkPeeringConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeeringConfig;

GoogleVmwareengineNetworkPeeringConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerNetwork(java.lang.String)
    .peerNetworkType(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .description(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean)
//  .exportCustomRoutes(IResolvable)
//  .exportCustomRoutesWithPublicIp(java.lang.Boolean)
//  .exportCustomRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean)
//  .importCustomRoutes(IResolvable)
//  .importCustomRoutesWithPublicIp(java.lang.Boolean)
//  .importCustomRoutesWithPublicIp(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleVmwareengineNetworkPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#name GoogleVmwareengineNetworkPeering#name}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#peer_network GoogleVmwareengineNetworkPeering#peer_network}

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType"></a>

```java
public java.lang.String getPeerNetworkType();
```

- *Type:* java.lang.String

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#peer_network_type GoogleVmwareengineNetworkPeering#peer_network_type}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#vmware_engine_network GoogleVmwareengineNetworkPeering#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#description GoogleVmwareengineNetworkPeering#description}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#export_custom_routes GoogleVmwareengineNetworkPeering#export_custom_routes}

---

##### `exportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#export_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#import_custom_routes GoogleVmwareengineNetworkPeering#import_custom_routes}

---

##### `importCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#import_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts"></a>

```java
public GoogleVmwareengineNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#timeouts GoogleVmwareengineNetworkPeering#timeouts}

---

### GoogleVmwareengineNetworkPeeringTimeouts <a name="GoogleVmwareengineNetworkPeeringTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeeringTimeouts;

GoogleVmwareengineNetworkPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkPeeringTimeoutsOutputReference <a name="GoogleVmwareengineNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network_peering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference;

new GoogleVmwareengineNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

---



