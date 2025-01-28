# `googleLoggingFolderSettings` Submodule <a name="`googleLoggingFolderSettings` Submodule" id="@cdktf/provider-google-beta.googleLoggingFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingFolderSettings <a name="GoogleLoggingFolderSettings" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings google_logging_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettings;

GoogleLoggingFolderSettings.Builder.create(Construct scope, java.lang.String id)
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
    .folder(java.lang.String)
//  .disableDefaultSink(java.lang.Boolean)
//  .disableDefaultSink(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .timeouts(GoogleLoggingFolderSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The folder for which to retrieve settings. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.disableDefaultSink">disableDefaultSink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The folder for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#folder GoogleLoggingFolderSettings#folder}

---

##### `disableDefaultSink`<sup>Optional</sup> <a name="disableDefaultSink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.disableDefaultSink"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#disable_default_sink GoogleLoggingFolderSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#kms_key_name GoogleLoggingFolderSettings#kms_key_name}

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.storageLocation"></a>

- *Type:* java.lang.String

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#storage_location GoogleLoggingFolderSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#timeouts GoogleLoggingFolderSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetDisableDefaultSink">resetDisableDefaultSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleLoggingFolderSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

---

##### `resetDisableDefaultSink` <a name="resetDisableDefaultSink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetDisableDefaultSink"></a>

```java
public void resetDisableDefaultSink()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetStorageLocation"></a>

```java
public void resetStorageLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingFolderSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettings;

GoogleLoggingFolderSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettings;

GoogleLoggingFolderSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettings;

GoogleLoggingFolderSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettings;

GoogleLoggingFolderSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleLoggingFolderSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleLoggingFolderSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleLoggingFolderSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleLoggingFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsServiceAccountId">kmsServiceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.loggingServiceAccountId">loggingServiceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference">GoogleLoggingFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSinkInput">disableDefaultSinkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocationInput">storageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSink">disableDefaultSink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsServiceAccountId`<sup>Required</sup> <a name="kmsServiceAccountId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsServiceAccountId"></a>

```java
public java.lang.String getKmsServiceAccountId();
```

- *Type:* java.lang.String

---

##### `loggingServiceAccountId`<sup>Required</sup> <a name="loggingServiceAccountId" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.loggingServiceAccountId"></a>

```java
public java.lang.String getLoggingServiceAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeouts"></a>

```java
public GoogleLoggingFolderSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference">GoogleLoggingFolderSettingsTimeoutsOutputReference</a>

---

##### `disableDefaultSinkInput`<sup>Optional</sup> <a name="disableDefaultSinkInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSinkInput"></a>

```java
public java.lang.Object getDisableDefaultSinkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocationInput"></a>

```java
public java.lang.String getStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

---

##### `disableDefaultSink`<sup>Required</sup> <a name="disableDefaultSink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSink"></a>

```java
public java.lang.Object getDisableDefaultSink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingFolderSettingsConfig <a name="GoogleLoggingFolderSettingsConfig" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettingsConfig;

GoogleLoggingFolderSettingsConfig.builder()
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
    .folder(java.lang.String)
//  .disableDefaultSink(java.lang.Boolean)
//  .disableDefaultSink(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .timeouts(GoogleLoggingFolderSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The folder for which to retrieve settings. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.disableDefaultSink">disableDefaultSink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The folder for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#folder GoogleLoggingFolderSettings#folder}

---

##### `disableDefaultSink`<sup>Optional</sup> <a name="disableDefaultSink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.disableDefaultSink"></a>

```java
public java.lang.Object getDisableDefaultSink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#disable_default_sink GoogleLoggingFolderSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#kms_key_name GoogleLoggingFolderSettings#kms_key_name}

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#storage_location GoogleLoggingFolderSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.timeouts"></a>

```java
public GoogleLoggingFolderSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#timeouts GoogleLoggingFolderSettings#timeouts}

---

### GoogleLoggingFolderSettingsTimeouts <a name="GoogleLoggingFolderSettingsTimeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettingsTimeouts;

GoogleLoggingFolderSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#create GoogleLoggingFolderSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#delete GoogleLoggingFolderSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#update GoogleLoggingFolderSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#create GoogleLoggingFolderSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#delete GoogleLoggingFolderSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_logging_folder_settings#update GoogleLoggingFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingFolderSettingsTimeoutsOutputReference <a name="GoogleLoggingFolderSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_folder_settings.GoogleLoggingFolderSettingsTimeoutsOutputReference;

new GoogleLoggingFolderSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

---



