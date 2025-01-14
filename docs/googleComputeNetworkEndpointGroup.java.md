# `googleComputeNetworkEndpointGroup` Submodule <a name="`googleComputeNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkEndpointGroup <a name="GoogleComputeNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroup;

GoogleComputeNetworkEndpointGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .defaultPort(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .networkEndpointType(java.lang.String)
//  .project(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(GoogleComputeNetworkEndpointGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#id GoogleComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#project GoogleComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the network endpoint group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#name GoogleComputeNetworkEndpointGroup#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#network GoogleComputeNetworkEndpointGroup#network}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.defaultPort"></a>

- *Type:* java.lang.Number

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#default_port GoogleComputeNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#description GoogleComputeNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#id GoogleComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#network_endpoint_type GoogleComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#project GoogleComputeNetworkEndpointGroup#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#subnetwork GoogleComputeNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#timeouts GoogleComputeNetworkEndpointGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#zone GoogleComputeNetworkEndpointGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetDefaultPort">resetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetNetworkEndpointType">resetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNetworkEndpointGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a>

---

##### `resetDefaultPort` <a name="resetDefaultPort" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetDefaultPort"></a>

```java
public void resetDefaultPort()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkEndpointType` <a name="resetNetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetNetworkEndpointType"></a>

```java
public void resetNetworkEndpointType()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroup;

GoogleComputeNetworkEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroup;

GoogleComputeNetworkEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroup;

GoogleComputeNetworkEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroup;

GoogleComputeNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.defaultPortInput">defaultPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.timeouts"></a>

```java
public GoogleComputeNetworkEndpointGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `defaultPortInput`<sup>Optional</sup> <a name="defaultPortInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.defaultPortInput"></a>

```java
public java.lang.Number getDefaultPortInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```java
public java.lang.String getNetworkEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.defaultPort"></a>

```java
public java.lang.Number getDefaultPort();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkEndpointGroupConfig <a name="GoogleComputeNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroupConfig;

GoogleComputeNetworkEndpointGroupConfig.builder()
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
//  .defaultPort(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .networkEndpointType(java.lang.String)
//  .project(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(GoogleComputeNetworkEndpointGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#id GoogleComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#project GoogleComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#name GoogleComputeNetworkEndpointGroup#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#network GoogleComputeNetworkEndpointGroup#network}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.defaultPort"></a>

```java
public java.lang.Number getDefaultPort();
```

- *Type:* java.lang.Number

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#default_port GoogleComputeNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#description GoogleComputeNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#id GoogleComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#network_endpoint_type GoogleComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#project GoogleComputeNetworkEndpointGroup#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#subnetwork GoogleComputeNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkEndpointGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#timeouts GoogleComputeNetworkEndpointGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#zone GoogleComputeNetworkEndpointGroup#zone}

---

### GoogleComputeNetworkEndpointGroupTimeouts <a name="GoogleComputeNetworkEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroupTimeouts;

GoogleComputeNetworkEndpointGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#create GoogleComputeNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#delete GoogleComputeNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#create GoogleComputeNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_network_endpoint_group#delete GoogleComputeNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkEndpointGroupTimeoutsOutputReference <a name="GoogleComputeNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network_endpoint_group.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference;

new GoogleComputeNetworkEndpointGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetworkEndpointGroup.GoogleComputeNetworkEndpointGroupTimeouts">GoogleComputeNetworkEndpointGroupTimeouts</a>

---



