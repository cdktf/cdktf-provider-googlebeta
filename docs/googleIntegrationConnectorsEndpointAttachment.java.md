# `googleIntegrationConnectorsEndpointAttachment` Submodule <a name="`googleIntegrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsEndpointAttachment <a name="GoogleIntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachment;

GoogleIntegrationConnectorsEndpointAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .description(java.lang.String)
//  .endpointGlobalAccess(java.lang.Boolean)
//  .endpointGlobalAccess(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationConnectorsEndpointAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#location GoogleIntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#name GoogleIntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment"></a>

- *Type:* java.lang.String

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#service_attachment GoogleIntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#description GoogleIntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#endpoint_global_access GoogleIntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#labels GoogleIntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#timeouts GoogleIntegrationConnectorsEndpointAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">resetEndpointGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleIntegrationConnectorsEndpointAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpointGlobalAccess` <a name="resetEndpointGlobalAccess" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```java
public void resetEndpointGlobalAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachment;

GoogleIntegrationConnectorsEndpointAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachment;

GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachment;

GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachment;

GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIntegrationConnectorsEndpointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp">endpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpointGlobalAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpointIp`<sup>Required</sup> <a name="endpointIp" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```java
public java.lang.String getEndpointIp();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```java
public GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointGlobalAccessInput`<sup>Optional</sup> <a name="endpointGlobalAccessInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```java
public java.lang.Object getEndpointGlobalAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```java
public java.lang.String getServiceAttachmentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpointGlobalAccess`<sup>Required</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```java
public java.lang.Object getEndpointGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsEndpointAttachmentConfig <a name="GoogleIntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachmentConfig;

GoogleIntegrationConnectorsEndpointAttachmentConfig.builder()
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
    .name(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .description(java.lang.String)
//  .endpointGlobalAccess(java.lang.Boolean)
//  .endpointGlobalAccess(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationConnectorsEndpointAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#location GoogleIntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#name GoogleIntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#service_attachment GoogleIntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#description GoogleIntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```java
public java.lang.Object getEndpointGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#endpoint_global_access GoogleIntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#labels GoogleIntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```java
public GoogleIntegrationConnectorsEndpointAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#timeouts GoogleIntegrationConnectorsEndpointAttachment#timeouts}

---

### GoogleIntegrationConnectorsEndpointAttachmentTimeouts <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts;

GoogleIntegrationConnectorsEndpointAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integration_connectors_endpoint_attachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference;

new GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

---



