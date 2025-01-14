# `googleComputeNetworkPeering` Submodule <a name="`googleComputeNetworkPeering` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeering <a name="GoogleComputeNetworkPeering" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering google_compute_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeering;

GoogleComputeNetworkPeering.Builder.create(Construct scope, java.lang.String id)
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
    .network(java.lang.String)
    .peerNetwork(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean)
//  .exportCustomRoutes(IResolvable)
//  .exportSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .exportSubnetRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean)
//  .importCustomRoutes(IResolvable)
//  .importSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .importSubnetRoutesWithPublicIp(IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeNetworkPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The primary network of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The peer network in the peering. The peer network may belong to a different project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes from the peer network. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#name GoogleComputeNetworkPeering#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The primary network of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#network GoogleComputeNetworkPeering#network}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.peerNetwork"></a>

- *Type:* java.lang.String

The peer network in the peering. The peer network may belong to a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#peer_network GoogleComputeNetworkPeering#peer_network}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes to the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_custom_routes GoogleComputeNetworkPeering#export_custom_routes}

---

##### `exportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.exportSubnetRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.importCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes from the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_custom_routes GoogleComputeNetworkPeering#import_custom_routes}

---

##### `importSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.importSubnetRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}.

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks.

The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#stack_type GoogleComputeNetworkPeering#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#timeouts GoogleComputeNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportCustomRoutes">resetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp">resetExportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportCustomRoutes">resetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp">resetImportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---

##### `resetExportCustomRoutes` <a name="resetExportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportCustomRoutes"></a>

```java
public void resetExportCustomRoutes()
```

##### `resetExportSubnetRoutesWithPublicIp` <a name="resetExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp"></a>

```java
public void resetExportSubnetRoutesWithPublicIp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetImportCustomRoutes` <a name="resetImportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportCustomRoutes"></a>

```java
public void resetImportCustomRoutes()
```

##### `resetImportSubnetRoutesWithPublicIp` <a name="resetImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp"></a>

```java
public void resetImportSubnetRoutesWithPublicIp()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeering;

GoogleComputeNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeering;

GoogleComputeNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeering;

GoogleComputeNetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeering;

GoogleComputeNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference">GoogleComputeNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput">exportSubnetRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput">importSubnetRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetworkInput">peerNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeouts"></a>

```java
public GoogleComputeNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference">GoogleComputeNetworkPeeringTimeoutsOutputReference</a>

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutesInput"></a>

```java
public java.lang.Object getExportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutesInput"></a>

```java
public java.lang.Object getImportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkInput`<sup>Optional</sup> <a name="peerNetworkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetworkInput"></a>

```java
public java.lang.String getPeerNetworkInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringConfig <a name="GoogleComputeNetworkPeeringConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeeringConfig;

GoogleComputeNetworkPeeringConfig.builder()
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
    .network(java.lang.String)
    .peerNetwork(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean)
//  .exportCustomRoutes(IResolvable)
//  .exportSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .exportSubnetRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean)
//  .importCustomRoutes(IResolvable)
//  .importSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .importSubnetRoutesWithPublicIp(IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeNetworkPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.network">network</a></code> | <code>java.lang.String</code> | The primary network of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The peer network in the peering. The peer network may belong to a different project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes from the peer network. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#name GoogleComputeNetworkPeering#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The primary network of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#network GoogleComputeNetworkPeering#network}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

The peer network in the peering. The peer network may belong to a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#peer_network GoogleComputeNetworkPeering#peer_network}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes to the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_custom_routes GoogleComputeNetworkPeering#export_custom_routes}

---

##### `exportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes from the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_custom_routes GoogleComputeNetworkPeering#import_custom_routes}

---

##### `importSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}.

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks.

The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#stack_type GoogleComputeNetworkPeering#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#timeouts GoogleComputeNetworkPeering#timeouts}

---

### GoogleComputeNetworkPeeringTimeouts <a name="GoogleComputeNetworkPeeringTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeeringTimeouts;

GoogleComputeNetworkPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#create GoogleComputeNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#delete GoogleComputeNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#update GoogleComputeNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#create GoogleComputeNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#delete GoogleComputeNetworkPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_peering#update GoogleComputeNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering.GoogleComputeNetworkPeeringTimeoutsOutputReference;

new GoogleComputeNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---



