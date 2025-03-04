# `googleFirebaseDataConnectService` Submodule <a name="`googleFirebaseDataConnectService` Submodule" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseDataConnectService <a name="GoogleFirebaseDataConnectService" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service google_firebase_data_connect_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectService;

GoogleFirebaseDataConnectService.Builder.create(Construct scope, java.lang.String id)
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
    .serviceId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseDataConnectServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#id GoogleFirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#project GoogleFirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#location GoogleFirebaseDataConnectService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#service_id GoogleFirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#annotations GoogleFirebaseDataConnectService#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#deletion_policy GoogleFirebaseDataConnectService#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#display_name GoogleFirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#id GoogleFirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#labels GoogleFirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#project GoogleFirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#timeouts GoogleFirebaseDataConnectService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseDataConnectServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseDataConnectService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectService;

GoogleFirebaseDataConnectService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectService;

GoogleFirebaseDataConnectService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectService;

GoogleFirebaseDataConnectService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectService;

GoogleFirebaseDataConnectService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseDataConnectService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseDataConnectService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseDataConnectService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseDataConnectService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseDataConnectService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference">GoogleFirebaseDataConnectServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.timeouts"></a>

```java
public GoogleFirebaseDataConnectServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference">GoogleFirebaseDataConnectServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseDataConnectServiceConfig <a name="GoogleFirebaseDataConnectServiceConfig" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectServiceConfig;

GoogleFirebaseDataConnectServiceConfig.builder()
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
    .serviceId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseDataConnectServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#id GoogleFirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#project GoogleFirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#location GoogleFirebaseDataConnectService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#service_id GoogleFirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#annotations GoogleFirebaseDataConnectService#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#deletion_policy GoogleFirebaseDataConnectService#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#display_name GoogleFirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#id GoogleFirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#labels GoogleFirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#project GoogleFirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceConfig.property.timeouts"></a>

```java
public GoogleFirebaseDataConnectServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#timeouts GoogleFirebaseDataConnectService#timeouts}

---

### GoogleFirebaseDataConnectServiceTimeouts <a name="GoogleFirebaseDataConnectServiceTimeouts" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectServiceTimeouts;

GoogleFirebaseDataConnectServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#create GoogleFirebaseDataConnectService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#delete GoogleFirebaseDataConnectService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#update GoogleFirebaseDataConnectService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#create GoogleFirebaseDataConnectService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#delete GoogleFirebaseDataConnectService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_data_connect_service#update GoogleFirebaseDataConnectService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseDataConnectServiceTimeoutsOutputReference <a name="GoogleFirebaseDataConnectServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_data_connect_service.GoogleFirebaseDataConnectServiceTimeoutsOutputReference;

new GoogleFirebaseDataConnectServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseDataConnectService.GoogleFirebaseDataConnectServiceTimeouts">GoogleFirebaseDataConnectServiceTimeouts</a>

---



