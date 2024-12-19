# `googleDeveloperConnectConnection` Submodule <a name="`googleDeveloperConnectConnection` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectConnection <a name="GoogleDeveloperConnectConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnection;

GoogleDeveloperConnectConnection.Builder.create(Construct scope, java.lang.String id)
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
    .connectionId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .etag(java.lang.String)
//  .githubConfig(GoogleDeveloperConnectConnectionGithubConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDeveloperConnectConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Required.

Id of the requesting object. If auto-generating Id server-side,
remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Optional.

This checksum is computed by the server based on the value
of other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.githubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig">putGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig">resetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGithubConfig` <a name="putGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig"></a>

```java
public void putGithubConfig(GoogleDeveloperConnectConnectionGithubConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts"></a>

```java
public void putTimeouts(GoogleDeveloperConnectConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetGithubConfig` <a name="resetGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig"></a>

```java
public void resetGithubConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnection;

GoogleDeveloperConnectConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnection;

GoogleDeveloperConnectConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnection;

GoogleDeveloperConnectConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnection;

GoogleDeveloperConnectConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDeveloperConnectConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDeveloperConnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState">installationState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput">githubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `githubConfig`<sup>Required</sup> <a name="githubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfigOutputReference getGithubConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `installationState`<sup>Required</sup> <a name="installationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState"></a>

```java
public GoogleDeveloperConnectConnectionInstallationStateList getInstallationState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts"></a>

```java
public GoogleDeveloperConnectConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `githubConfigInput`<sup>Optional</sup> <a name="githubConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfig getGithubConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectConnectionConfig <a name="GoogleDeveloperConnectConnectionConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionConfig;

GoogleDeveloperConnectConnectionConfig.builder()
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
    .connectionId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .etag(java.lang.String)
//  .githubConfig(GoogleDeveloperConnectConnectionGithubConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDeveloperConnectConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Required.

Id of the requesting object. If auto-generating Id server-side,
remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Optional.

This checksum is computed by the server based on the value
of other fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfig getGithubConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts"></a>

```java
public GoogleDeveloperConnectConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}

---

### GoogleDeveloperConnectConnectionGithubConfig <a name="GoogleDeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionGithubConfig;

GoogleDeveloperConnectConnectionGithubConfig.builder()
    .githubApp(java.lang.String)
//  .appInstallationId(java.lang.String)
//  .authorizerCredential(GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp">githubApp</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.String</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```java
public java.lang.String getGithubApp();
```

- *Type:* java.lang.String

Required.

Immutable. The GitHub Application that was installed to
the GitHub user or organization.
Possible values:
GIT_HUB_APP_UNSPECIFIED
DEVELOPER_CONNECT
FIREBASE"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```java
public java.lang.String getAppInstallationId();
```

- *Type:* java.lang.String

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `authorizerCredential`<sup>Optional</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential;

GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.builder()
    .oauthTokenSecretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>java.lang.String</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```java
public java.lang.String getOauthTokenSecretVersion();
```

- *Type:* java.lang.String

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionInstallationState <a name="GoogleDeveloperConnectConnectionInstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionInstallationState;

GoogleDeveloperConnectConnectionInstallationState.builder()
    .build();
```


### GoogleDeveloperConnectConnectionTimeouts <a name="GoogleDeveloperConnectConnectionTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionTimeouts;

GoogleDeveloperConnectConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference;

new GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauthTokenSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `oauthTokenSecretVersionInput`<sup>Optional</sup> <a name="oauthTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```java
public java.lang.String getOauthTokenSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```java
public java.lang.String getOauthTokenSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGithubConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionGithubConfigOutputReference;

new GoogleDeveloperConnectConnectionGithubConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">resetAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```java
public void putAuthorizerCredential(GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```java
public void resetAppInstallationId()
```

##### `resetAuthorizerCredential` <a name="resetAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```java
public void resetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">installationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">githubAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">githubApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference getAuthorizerCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `installationUri`<sup>Required</sup> <a name="installationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```java
public java.lang.String getInstallationUri();
```

- *Type:* java.lang.String

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```java
public java.lang.String getAppInstallationIdInput();
```

- *Type:* java.lang.String

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential getAuthorizerCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `githubAppInput`<sup>Optional</sup> <a name="githubAppInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```java
public java.lang.String getGithubAppInput();
```

- *Type:* java.lang.String

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```java
public java.lang.String getAppInstallationId();
```

- *Type:* java.lang.String

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```java
public java.lang.String getGithubApp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectConnectionGithubConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---


### GoogleDeveloperConnectConnectionInstallationStateList <a name="GoogleDeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionInstallationStateList;

new GoogleDeveloperConnectConnectionInstallationStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get"></a>

```java
public GoogleDeveloperConnectConnectionInstallationStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDeveloperConnectConnectionInstallationStateOutputReference <a name="GoogleDeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionInstallationStateOutputReference;

new GoogleDeveloperConnectConnectionInstallationStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">actionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionUri`<sup>Required</sup> <a name="actionUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```java
public java.lang.String getActionUri();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectConnectionInstallationState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a>

---


### GoogleDeveloperConnectConnectionTimeoutsOutputReference <a name="GoogleDeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_developer_connect_connection.GoogleDeveloperConnectConnectionTimeoutsOutputReference;

new GoogleDeveloperConnectConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---



