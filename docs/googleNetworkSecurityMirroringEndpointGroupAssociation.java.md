# `googleNetworkSecurityMirroringEndpointGroupAssociation` Submodule <a name="`googleNetworkSecurityMirroringEndpointGroupAssociation` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociation <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociation" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association google_network_security_mirroring_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociation;

GoogleNetworkSecurityMirroringEndpointGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .mirroringEndpointGroup(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mirroringEndpointGroupAssociationId(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>java.lang.String</code> | Required. Immutable. The Mirroring Endpoint Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringEndpointGroups/{mirroringEndpointGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Required. Immutable. The VPC network associated. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroupAssociationId">mirroringEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | Optional. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_association_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/MirroringEndpointGroupAssociation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#location GoogleNetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroup"></a>

- *Type:* java.lang.String

Required. Immutable. The Mirroring Endpoint Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringEndpointGroups/{mirroringEndpointGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Required. Immutable. The VPC network associated. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#network GoogleNetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#labels GoogleNetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `mirroringEndpointGroupAssociationId`<sup>Optional</sup> <a name="mirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.mirroringEndpointGroupAssociationId"></a>

- *Type:* java.lang.String

Optional. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_association_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#timeouts GoogleNetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId">resetMirroringEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMirroringEndpointGroupAssociationId` <a name="resetMirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId"></a>

```java
public void resetMirroringEndpointGroupAssociationId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociation;

GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociation;

GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociation;

GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociation;

GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityMirroringEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails">locationsDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput">mirroringEndpointGroupAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput">mirroringEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId">mirroringEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `locationsDetails`<sup>Required</sup> <a name="locationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails"></a>

```java
public GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList getLocationsDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeouts"></a>

```java
public GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="mirroringEndpointGroupAssociationIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput"></a>

```java
public java.lang.String getMirroringEndpointGroupAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupInput`<sup>Optional</sup> <a name="mirroringEndpointGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput"></a>

```java
public java.lang.String getMirroringEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup"></a>

```java
public java.lang.String getMirroringEndpointGroup();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupAssociationId`<sup>Required</sup> <a name="mirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId"></a>

```java
public java.lang.String getMirroringEndpointGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig;

GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.builder()
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
    .location(java.lang.String)
    .mirroringEndpointGroup(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mirroringEndpointGroupAssociationId(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>java.lang.String</code> | Required. Immutable. The Mirroring Endpoint Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringEndpointGroups/{mirroringEndpointGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.network">network</a></code> | <code>java.lang.String</code> | Required. Immutable. The VPC network associated. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId">mirroringEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | Optional. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_association_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/MirroringEndpointGroupAssociation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#location GoogleNetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup"></a>

```java
public java.lang.String getMirroringEndpointGroup();
```

- *Type:* java.lang.String

Required. Immutable. The Mirroring Endpoint Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringEndpointGroups/{mirroringEndpointGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required. Immutable. The VPC network associated. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#network GoogleNetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#labels GoogleNetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `mirroringEndpointGroupAssociationId`<sup>Optional</sup> <a name="mirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId"></a>

```java
public java.lang.String getMirroringEndpointGroupAssociationId();
```

- *Type:* java.lang.String

Optional. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_association_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#timeouts GoogleNetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails;

GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.builder()
    .build();
```


### GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts;

GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#create GoogleNetworkSecurityMirroringEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#delete GoogleNetworkSecurityMirroringEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#update GoogleNetworkSecurityMirroringEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#create GoogleNetworkSecurityMirroringEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#delete GoogleNetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_mirroring_endpoint_group_association#update GoogleNetworkSecurityMirroringEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList;

new GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get"></a>

```java
public GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference;

new GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_endpoint_group_association.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference;

new GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---



