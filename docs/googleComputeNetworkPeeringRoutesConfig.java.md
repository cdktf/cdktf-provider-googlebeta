# `googleComputeNetworkPeeringRoutesConfig` Submodule <a name="`googleComputeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeeringRoutesConfig <a name="GoogleComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfig;

GoogleComputeNetworkPeeringRoutesConfig.Builder.create(Construct scope, java.lang.String id)
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
    .exportCustomRoutes(java.lang.Boolean)
    .exportCustomRoutes(IResolvable)
    .importCustomRoutes(java.lang.Boolean)
    .importCustomRoutes(IResolvable)
    .network(java.lang.String)
    .peering(java.lang.String)
//  .exportSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .exportSubnetRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .importSubnetRoutesWithPublicIp(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeNetworkPeeringRoutesConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.peering">peering</a></code> | <code>java.lang.String</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether subnet routes with public IP range are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether subnet routes with public IP range are imported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#export_custom_routes GoogleComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.importCustomRoutes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#import_custom_routes GoogleComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#network GoogleComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.peering"></a>

- *Type:* java.lang.String

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#peering GoogleComputeNetworkPeeringRoutesConfig#peering}

---

##### `exportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportSubnetRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether subnet routes with public IP range are exported.

IPv4 special-use ranges are always exported to peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#export_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#export_subnet_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.importSubnetRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether subnet routes with public IP range are imported.

IPv4 special-use ranges are always imported from peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#import_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#import_subnet_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#timeouts GoogleComputeNetworkPeeringRoutesConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp">resetExportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp">resetImportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNetworkPeeringRoutesConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `resetExportSubnetRoutesWithPublicIp` <a name="resetExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp"></a>

```java
public void resetExportSubnetRoutesWithPublicIp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId"></a>

```java
public void resetId()
```

##### `resetImportSubnetRoutesWithPublicIp` <a name="resetImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp"></a>

```java
public void resetImportSubnetRoutesWithPublicIp()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfig;

GoogleComputeNetworkPeeringRoutesConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfig;

GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfig;

GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfig;

GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNetworkPeeringRoutesConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput">exportSubnetRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput">importSubnetRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput">peeringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering">peering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```java
public java.lang.Object getExportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```java
public java.lang.Object getImportCustomRoutesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```java
public java.lang.String getPeeringInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `importSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringRoutesConfigConfig <a name="GoogleComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfigConfig;

GoogleComputeNetworkPeeringRoutesConfigConfig.builder()
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
    .exportCustomRoutes(java.lang.Boolean)
    .exportCustomRoutes(IResolvable)
    .importCustomRoutes(java.lang.Boolean)
    .importCustomRoutes(IResolvable)
    .network(java.lang.String)
    .peering(java.lang.String)
//  .exportSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .exportSubnetRoutesWithPublicIp(IResolvable)
//  .id(java.lang.String)
//  .importSubnetRoutesWithPublicIp(java.lang.Boolean)
//  .importSubnetRoutesWithPublicIp(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeNetworkPeeringRoutesConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering">peering</a></code> | <code>java.lang.String</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp">exportSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether subnet routes with public IP range are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp">importSubnetRoutesWithPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether subnet routes with public IP range are imported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```java
public java.lang.Object getExportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#export_custom_routes GoogleComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```java
public java.lang.Object getImportCustomRoutes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#import_custom_routes GoogleComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#network GoogleComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#peering GoogleComputeNetworkPeeringRoutesConfig#peering}

---

##### `exportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="exportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getExportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether subnet routes with public IP range are exported.

IPv4 special-use ranges are always exported to peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#export_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#export_subnet_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="importSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp"></a>

```java
public java.lang.Object getImportSubnetRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether subnet routes with public IP range are imported.

IPv4 special-use ranges are always imported from peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#import_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#import_subnet_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkPeeringRoutesConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#timeouts GoogleComputeNetworkPeeringRoutesConfig#timeouts}

---

### GoogleComputeNetworkPeeringRoutesConfigTimeouts <a name="GoogleComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfigTimeouts;

GoogleComputeNetworkPeeringRoutesConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_peering_routes_config.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference;

new GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---



