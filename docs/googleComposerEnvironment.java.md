# `googleComposerEnvironment` Submodule <a name="`googleComposerEnvironment` Submodule" id="@cdktf/provider-google-beta.googleComposerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComposerEnvironment <a name="GoogleComposerEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironment;

GoogleComposerEnvironment.Builder.create(Construct scope, java.lang.String id)
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
//  .config(GoogleComposerEnvironmentConfigA)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .storageConfig(GoogleComposerEnvironmentStorageConfig)
//  .timeouts(GoogleComposerEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#name GoogleComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#config GoogleComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

```
			**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
			Please refer to the field 'effective_labels' for all of the labels present on the resource.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#labels GoogleComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#project GoogleComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#region GoogleComposerEnvironment#region}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.storageConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_config GoogleComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#timeouts GoogleComposerEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig"></a>

```java
public void putConfig(GoogleComposerEnvironmentConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig"></a>

```java
public void putStorageConfig(GoogleComposerEnvironmentStorageConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts"></a>

```java
public void putTimeouts(GoogleComposerEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig"></a>

```java
public void resetStorageConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironment;

GoogleComposerEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironment;

GoogleComposerEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironment;

GoogleComposerEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironment;

GoogleComposerEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComposerEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComposerEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config"></a>

```java
public GoogleComposerEnvironmentConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig"></a>

```java
public GoogleComposerEnvironmentStorageConfigOutputReference getStorageConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts"></a>

```java
public GoogleComposerEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput"></a>

```java
public GoogleComposerEnvironmentConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput"></a>

```java
public GoogleComposerEnvironmentStorageConfig getStorageConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComposerEnvironmentConfig <a name="GoogleComposerEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfig;

GoogleComposerEnvironmentConfig.builder()
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
//  .config(GoogleComposerEnvironmentConfigA)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .storageConfig(GoogleComposerEnvironmentStorageConfig)
//  .timeouts(GoogleComposerEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#name GoogleComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config"></a>

```java
public GoogleComposerEnvironmentConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#config GoogleComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

```
			**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
			Please refer to the field 'effective_labels' for all of the labels present on the resource.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#labels GoogleComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#project GoogleComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#region GoogleComposerEnvironment#region}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig"></a>

```java
public GoogleComposerEnvironmentStorageConfig getStorageConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_config GoogleComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts"></a>

```java
public GoogleComposerEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#timeouts GoogleComposerEnvironment#timeouts}

---

### GoogleComposerEnvironmentConfigA <a name="GoogleComposerEnvironmentConfigA" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigA;

GoogleComposerEnvironmentConfigA.builder()
//  .databaseConfig(GoogleComposerEnvironmentConfigDatabaseConfig)
//  .dataRetentionConfig(GoogleComposerEnvironmentConfigDataRetentionConfig)
//  .enablePrivateBuildsOnly(java.lang.Boolean)
//  .enablePrivateBuildsOnly(IResolvable)
//  .enablePrivateEnvironment(java.lang.Boolean)
//  .enablePrivateEnvironment(IResolvable)
//  .encryptionConfig(GoogleComposerEnvironmentConfigEncryptionConfig)
//  .environmentSize(java.lang.String)
//  .maintenanceWindow(GoogleComposerEnvironmentConfigMaintenanceWindow)
//  .masterAuthorizedNetworksConfig(GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig)
//  .nodeConfig(GoogleComposerEnvironmentConfigNodeConfig)
//  .nodeCount(java.lang.Number)
//  .privateEnvironmentConfig(GoogleComposerEnvironmentConfigPrivateEnvironmentConfig)
//  .recoveryConfig(GoogleComposerEnvironmentConfigRecoveryConfig)
//  .resilienceMode(java.lang.String)
//  .softwareConfig(GoogleComposerEnvironmentConfigSoftwareConfig)
//  .webServerConfig(GoogleComposerEnvironmentConfigWebServerConfig)
//  .webServerNetworkAccessControl(GoogleComposerEnvironmentConfigWebServerNetworkAccessControl)
//  .workloadsConfig(GoogleComposerEnvironmentConfigWorkloadsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | data_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly">enablePrivateBuildsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment">enablePrivateEnvironment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, a private Composer environment will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize">environmentSize</a></code> | <code>java.lang.String</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode">resilienceMode</a></code> | <code>java.lang.String</code> | Whether high resilience is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `databaseConfig`<sup>Optional</sup> <a name="databaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig"></a>

```java
public GoogleComposerEnvironmentConfigDatabaseConfig getDatabaseConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#database_config GoogleComposerEnvironment#database_config}

---

##### `dataRetentionConfig`<sup>Optional</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfig getDataRetentionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#data_retention_config GoogleComposerEnvironment#data_retention_config}

---

##### `enablePrivateBuildsOnly`<sup>Optional</sup> <a name="enablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly"></a>

```java
public java.lang.Object getEnablePrivateBuildsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enable_private_builds_only GoogleComposerEnvironment#enable_private_builds_only}

---

##### `enablePrivateEnvironment`<sup>Optional</sup> <a name="enablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment"></a>

```java
public java.lang.Object getEnablePrivateEnvironment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, a private Composer environment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enable_private_environment GoogleComposerEnvironment#enable_private_environment}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig"></a>

```java
public GoogleComposerEnvironmentConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#encryption_config GoogleComposerEnvironment#encryption_config}

---

##### `environmentSize`<sup>Optional</sup> <a name="environmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize"></a>

```java
public java.lang.String getEnvironmentSize();
```

- *Type:* java.lang.String

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#environment_size GoogleComposerEnvironment#environment_size}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```java
public GoogleComposerEnvironmentConfigMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#maintenance_window GoogleComposerEnvironment#maintenance_window}

---

##### `masterAuthorizedNetworksConfig`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig getMasterAuthorizedNetworksConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#master_authorized_networks_config GoogleComposerEnvironment#master_authorized_networks_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#node_config GoogleComposerEnvironment#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#node_count GoogleComposerEnvironment#node_count}

---

##### `privateEnvironmentConfig`<sup>Optional</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```java
public GoogleComposerEnvironmentConfigPrivateEnvironmentConfig getPrivateEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#private_environment_config GoogleComposerEnvironment#private_environment_config}

---

##### `recoveryConfig`<sup>Optional</sup> <a name="recoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfig getRecoveryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#recovery_config GoogleComposerEnvironment#recovery_config}

---

##### `resilienceMode`<sup>Optional</sup> <a name="resilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode"></a>

```java
public java.lang.String getResilienceMode();
```

- *Type:* java.lang.String

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#resilience_mode GoogleComposerEnvironment#resilience_mode}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfig getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#software_config GoogleComposerEnvironment#software_config}

---

##### `webServerConfig`<sup>Optional</sup> <a name="webServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig"></a>

```java
public GoogleComposerEnvironmentConfigWebServerConfig getWebServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#web_server_config GoogleComposerEnvironment#web_server_config}

---

##### `webServerNetworkAccessControl`<sup>Optional</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControl getWebServerNetworkAccessControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#web_server_network_access_control GoogleComposerEnvironment#web_server_network_access_control}

---

##### `workloadsConfig`<sup>Optional</sup> <a name="workloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfig getWorkloadsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#workloads_config GoogleComposerEnvironment#workloads_config}

---

### GoogleComposerEnvironmentConfigDatabaseConfig <a name="GoogleComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDatabaseConfig;

GoogleComposerEnvironmentConfigDatabaseConfig.builder()
//  .machineType(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Optional. Cloud SQL database preferred zone. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigDataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfig;

GoogleComposerEnvironmentConfigDataRetentionConfig.builder()
//  .airflowMetadataRetentionConfig(IResolvable)
//  .airflowMetadataRetentionConfig(java.util.List<GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig>)
//  .taskLogsRetentionConfig(IResolvable)
//  .taskLogsRetentionConfig(java.util.List<GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig">airflowMetadataRetentionConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>></code> | airflow_metadata_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>></code> | task_logs_retention_config block. |

---

##### `airflowMetadataRetentionConfig`<sup>Optional</sup> <a name="airflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig"></a>

```java
public java.lang.Object getAirflowMetadataRetentionConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>>

airflow_metadata_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#airflow_metadata_retention_config GoogleComposerEnvironment#airflow_metadata_retention_config}

---

##### `taskLogsRetentionConfig`<sup>Optional</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig"></a>

```java
public java.lang.Object getTaskLogsRetentionConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>>

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#task_logs_retention_config GoogleComposerEnvironment#task_logs_retention_config}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig;

GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.builder()
//  .retentionDays(java.lang.Number)
//  .retentionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | How many days data should be retained for. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode">retentionMode</a></code> | <code>java.lang.String</code> | Whether database retention is enabled or not. |

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

How many days data should be retained for.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#retention_days GoogleComposerEnvironment#retention_days}

---

##### `retentionMode`<sup>Optional</sup> <a name="retentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode"></a>

```java
public java.lang.String getRetentionMode();
```

- *Type:* java.lang.String

Whether database retention is enabled or not.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#retention_mode GoogleComposerEnvironment#retention_mode}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig;

GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.builder()
//  .storageMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode">storageMode</a></code> | <code>java.lang.String</code> | Whether logs in cloud logging only is enabled or not. |

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode"></a>

```java
public java.lang.String getStorageMode();
```

- *Type:* java.lang.String

Whether logs in cloud logging only is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4 and newer but not in composer-3*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_mode GoogleComposerEnvironment#storage_mode}

---

### GoogleComposerEnvironmentConfigEncryptionConfig <a name="GoogleComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigEncryptionConfig;

GoogleComposerEnvironmentConfigEncryptionConfig.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#kms_key_name GoogleComposerEnvironment#kms_key_name}

---

### GoogleComposerEnvironmentConfigMaintenanceWindow <a name="GoogleComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMaintenanceWindow;

GoogleComposerEnvironmentConfigMaintenanceWindow.builder()
    .endTime(java.lang.String)
    .recurrence(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Start time of the first recurrence of the maintenance window. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#end_time GoogleComposerEnvironment#end_time}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#recurrence GoogleComposerEnvironment#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#start_time GoogleComposerEnvironment#start_time}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig;

GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .cidrBlocks(IResolvable)
//  .cidrBlocks(java.util.List<GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>></code> | cidr_blocks block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```java
public java.lang.Object getCidrBlocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>>

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cidr_blocks GoogleComposerEnvironment#cidr_blocks}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks;

GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.builder()
    .cidrBlock(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">displayName</a></code> | <code>java.lang.String</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cidr_block GoogleComposerEnvironment#cidr_block}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#display_name GoogleComposerEnvironment#display_name}

---

### GoogleComposerEnvironmentConfigNodeConfig <a name="GoogleComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigNodeConfig;

GoogleComposerEnvironmentConfigNodeConfig.builder()
//  .composerInternalIpv4CidrBlock(java.lang.String)
//  .composerNetworkAttachment(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .enableIpMasqAgent(java.lang.Boolean)
//  .enableIpMasqAgent(IResolvable)
//  .ipAllocationPolicy(GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy)
//  .machineType(java.lang.String)
//  .maxPodsPerNode(java.lang.Number)
//  .network(java.lang.String)
//  .oauthScopes(java.util.List<java.lang.String>)
//  .serviceAccount(java.lang.String)
//  .subnetwork(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock">composerInternalIpv4CidrBlock</a></code> | <code>java.lang.String</code> | IPv4 cidr range that will be used by Composer internal components. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment">composerNetworkAttachment</a></code> | <code>java.lang.String</code> | PSC (Private Service Connect) Network entry point. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | ip_allocation_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | The maximum pods per node in the GKE cluster allocated during environment creation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network">network</a></code> | <code>java.lang.String</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `composerInternalIpv4CidrBlock`<sup>Optional</sup> <a name="composerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock"></a>

```java
public java.lang.String getComposerInternalIpv4CidrBlock();
```

- *Type:* java.lang.String

IPv4 cidr range that will be used by Composer internal components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#composer_internal_ipv4_cidr_block GoogleComposerEnvironment#composer_internal_ipv4_cidr_block}

---

##### `composerNetworkAttachment`<sup>Optional</sup> <a name="composerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment"></a>

```java
public java.lang.String getComposerNetworkAttachment();
```

- *Type:* java.lang.String

PSC (Private Service Connect) Network entry point.

Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#composer_network_attachment GoogleComposerEnvironment#composer_network_attachment}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#disk_size_gb GoogleComposerEnvironment#disk_size_gb}

---

##### `enableIpMasqAgent`<sup>Optional</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```java
public java.lang.Object getEnableIpMasqAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enable_ip_masq_agent GoogleComposerEnvironment#enable_ip_masq_agent}

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy getIpAllocationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

ip_allocation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#ip_allocation_policy GoogleComposerEnvironment#ip_allocation_policy}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

The maximum pods per node in the GKE cluster allocated during environment creation.

Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#max_pods_per_node GoogleComposerEnvironment#max_pods_per_node}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#network GoogleComposerEnvironment#network}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#oauth_scopes GoogleComposerEnvironment#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#service_account GoogleComposerEnvironment#service_account}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#subnetwork GoogleComposerEnvironment#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#tags GoogleComposerEnvironment#tags}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy;

GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.builder()
//  .clusterIpv4CidrBlock(java.lang.String)
//  .clusterSecondaryRangeName(java.lang.String)
//  .servicesIpv4CidrBlock(java.lang.String)
//  .servicesSecondaryRangeName(java.lang.String)
//  .useIpAliases(java.lang.Boolean)
//  .useIpAliases(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The IP address range used to allocate IP addresses to pods in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>java.lang.String</code> | The name of the cluster's secondary range used to allocate IP addresses to pods. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The IP address range used to allocate IP addresses in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>java.lang.String</code> | The name of the services' secondary range used to allocate IP addresses to the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">useIpAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable Alias IPs in the GKE cluster. |

---

##### `clusterIpv4CidrBlock`<sup>Optional</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```java
public java.lang.String getClusterIpv4CidrBlock();
```

- *Type:* java.lang.String

The IP address range used to allocate IP addresses to pods in the cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cluster_ipv4_cidr_block GoogleComposerEnvironment#cluster_ipv4_cidr_block}

---

##### `clusterSecondaryRangeName`<sup>Optional</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```java
public java.lang.String getClusterSecondaryRangeName();
```

- *Type:* java.lang.String

The name of the cluster's secondary range used to allocate IP addresses to pods.

Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cluster_secondary_range_name GoogleComposerEnvironment#cluster_secondary_range_name}

---

##### `servicesIpv4CidrBlock`<sup>Optional</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```java
public java.lang.String getServicesIpv4CidrBlock();
```

- *Type:* java.lang.String

The IP address range used to allocate IP addresses in this cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either services_secondary_range_name or services_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#services_ipv4_cidr_block GoogleComposerEnvironment#services_ipv4_cidr_block}

---

##### `servicesSecondaryRangeName`<sup>Optional</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```java
public java.lang.String getServicesSecondaryRangeName();
```

- *Type:* java.lang.String

The name of the services' secondary range used to allocate IP addresses to the cluster.

Specify either services_secondary_range_name or services_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#services_secondary_range_name GoogleComposerEnvironment#services_secondary_range_name}

---

##### `useIpAliases`<sup>Optional</sup> <a name="useIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```java
public java.lang.Object getUseIpAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to enable Alias IPs in the GKE cluster.

If true, a VPC-native cluster is created. Defaults to true if the ip_allocation_policy block is present in config. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#use_ip_aliases GoogleComposerEnvironment#use_ip_aliases}

---

### GoogleComposerEnvironmentConfigPrivateEnvironmentConfig <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig;

GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.builder()
//  .cloudComposerConnectionSubnetwork(java.lang.String)
//  .cloudComposerNetworkIpv4CidrBlock(java.lang.String)
//  .cloudSqlIpv4CidrBlock(java.lang.String)
//  .connectionType(java.lang.String)
//  .enablePrivateEndpoint(java.lang.Boolean)
//  .enablePrivateEndpoint(IResolvable)
//  .enablePrivatelyUsedPublicIps(java.lang.Boolean)
//  .enablePrivatelyUsedPublicIps(IResolvable)
//  .masterIpv4CidrBlock(java.lang.String)
//  .webServerIpv4CidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>java.lang.String</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>java.lang.String</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `cloudComposerConnectionSubnetwork`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```java
public java.lang.String getCloudComposerConnectionSubnetwork();
```

- *Type:* java.lang.String

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cloud_composer_connection_subnetwork GoogleComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```java
public java.lang.String getCloudComposerNetworkIpv4CidrBlock();
```

- *Type:* java.lang.String

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cloud_composer_network_ipv4_cidr_block GoogleComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `cloudSqlIpv4CidrBlock`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```java
public java.lang.String getCloudSqlIpv4CidrBlock();
```

- *Type:* java.lang.String

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cloud_sql_ipv4_cidr_block GoogleComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#connection_type GoogleComposerEnvironment#connection_type}

---

##### `enablePrivateEndpoint`<sup>Optional</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```java
public java.lang.Object getEnablePrivateEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enable_private_endpoint GoogleComposerEnvironment#enable_private_endpoint}

---

##### `enablePrivatelyUsedPublicIps`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```java
public java.lang.Object getEnablePrivatelyUsedPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enable_privately_used_public_ips GoogleComposerEnvironment#enable_privately_used_public_ips}

---

##### `masterIpv4CidrBlock`<sup>Optional</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```java
public java.lang.String getMasterIpv4CidrBlock();
```

- *Type:* java.lang.String

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#master_ipv4_cidr_block GoogleComposerEnvironment#master_ipv4_cidr_block}

---

##### `webServerIpv4CidrBlock`<sup>Optional</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```java
public java.lang.String getWebServerIpv4CidrBlock();
```

- *Type:* java.lang.String

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#web_server_ipv4_cidr_block GoogleComposerEnvironment#web_server_ipv4_cidr_block}

---

### GoogleComposerEnvironmentConfigRecoveryConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigRecoveryConfig;

GoogleComposerEnvironmentConfigRecoveryConfig.builder()
//  .scheduledSnapshotsConfig(GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `scheduledSnapshotsConfig`<sup>Optional</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig getScheduledSnapshotsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#scheduled_snapshots_config GoogleComposerEnvironment#scheduled_snapshots_config}

---

### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;

GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .snapshotCreationSchedule(java.lang.String)
//  .snapshotLocation(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>java.lang.String</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">snapshotLocation</a></code> | <code>java.lang.String</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | A time zone for the schedule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `snapshotCreationSchedule`<sup>Optional</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```java
public java.lang.String getSnapshotCreationSchedule();
```

- *Type:* java.lang.String

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#snapshot_creation_schedule GoogleComposerEnvironment#snapshot_creation_schedule}

---

##### `snapshotLocation`<sup>Optional</sup> <a name="snapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```java
public java.lang.String getSnapshotLocation();
```

- *Type:* java.lang.String

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#snapshot_location GoogleComposerEnvironment#snapshot_location}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#time_zone GoogleComposerEnvironment#time_zone}

---

### GoogleComposerEnvironmentConfigSoftwareConfig <a name="GoogleComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigSoftwareConfig;

GoogleComposerEnvironmentConfigSoftwareConfig.builder()
//  .airflowConfigOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .cloudDataLineageIntegration(GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration)
//  .envVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .imageVersion(java.lang.String)
//  .pypiPackages(java.util.Map<java.lang.String, java.lang.String>)
//  .pythonVersion(java.lang.String)
//  .schedulerCount(java.lang.Number)
//  .webServerPluginsMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration">cloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | cloud_data_lineage_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables">envVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">pypiPackages</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">schedulerCount</a></code> | <code>java.lang.Number</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode">webServerPluginsMode</a></code> | <code>java.lang.String</code> | Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3. |

---

##### `airflowConfigOverrides`<sup>Optional</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#airflow_config_overrides GoogleComposerEnvironment#airflow_config_overrides}

---

##### `cloudDataLineageIntegration`<sup>Optional</sup> <a name="cloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration getCloudDataLineageIntegration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

cloud_data_lineage_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cloud_data_lineage_integration GoogleComposerEnvironment#cloud_data_lineage_integration}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#env_variables GoogleComposerEnvironment#env_variables}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(.[0-9]+.[0-9]+(-preview.[0-9]+)?)?|latest)-airflow-([0-9]+(.[0-9]+(.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#image_version GoogleComposerEnvironment#image_version}

---

##### `pypiPackages`<sup>Optional</sup> <a name="pypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPypiPackages();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#pypi_packages GoogleComposerEnvironment#pypi_packages}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#python_version GoogleComposerEnvironment#python_version}

---

##### `schedulerCount`<sup>Optional</sup> <a name="schedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```java
public java.lang.Number getSchedulerCount();
```

- *Type:* java.lang.Number

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#scheduler_count GoogleComposerEnvironment#scheduler_count}

---

##### `webServerPluginsMode`<sup>Optional</sup> <a name="webServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode"></a>

```java
public java.lang.String getWebServerPluginsMode();
```

- *Type:* java.lang.String

Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#web_server_plugins_mode GoogleComposerEnvironment#web_server_plugins_mode}

---

### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration;

GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not Cloud Data Lineage integration is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not Cloud Data Lineage integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

### GoogleComposerEnvironmentConfigWebServerConfig <a name="GoogleComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerConfig;

GoogleComposerEnvironmentConfigWebServerConfig.builder()
    .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControl <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl;

GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.builder()
//  .allowedIpRange(IResolvable)
//  .allowedIpRange(java.util.List<GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">allowedIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>></code> | allowed_ip_range block. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```java
public java.lang.Object getAllowedIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>>

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#allowed_ip_range GoogleComposerEnvironment#allowed_ip_range}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange;

GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.builder()
    .value(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">value</a></code> | <code>java.lang.String</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">description</a></code> | <code>java.lang.String</code> | A description of this ip range. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#value GoogleComposerEnvironment#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this ip range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#description GoogleComposerEnvironment#description}

---

### GoogleComposerEnvironmentConfigWorkloadsConfig <a name="GoogleComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfig;

GoogleComposerEnvironmentConfigWorkloadsConfig.builder()
//  .dagProcessor(GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor)
//  .scheduler(GoogleComposerEnvironmentConfigWorkloadsConfigScheduler)
//  .triggerer(GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer)
//  .webServer(GoogleComposerEnvironmentConfigWorkloadsConfigWebServer)
//  .worker(GoogleComposerEnvironmentConfigWorkloadsConfigWorker)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor">dagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | dag_processor block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | triggerer block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `dagProcessor`<sup>Optional</sup> <a name="dagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor getDagProcessor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

dag_processor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#dag_processor GoogleComposerEnvironment#dag_processor}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigScheduler getScheduler();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#scheduler GoogleComposerEnvironment#scheduler}

---

##### `triggerer`<sup>Optional</sup> <a name="triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer getTriggerer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#triggerer GoogleComposerEnvironment#triggerer}

---

##### `webServer`<sup>Optional</sup> <a name="webServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWebServer getWebServer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#web_server GoogleComposerEnvironment#web_server}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWorker getWorker();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#worker GoogleComposerEnvironment#worker}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor;

GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.builder()
//  .count(java.lang.Number)
//  .cpu(java.lang.Number)
//  .memoryGb(java.lang.Number)
//  .storageGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count">count</a></code> | <code>java.lang.Number</code> | Number of DAG processors. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | CPU request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | Memory (GB) request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | Storage (GB) request and limit for DAG processor. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of DAG processors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

CPU request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

Memory (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

Storage (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigScheduler <a name="GoogleComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler;

GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.builder()
//  .count(java.lang.Number)
//  .cpu(java.lang.Number)
//  .memoryGb(java.lang.Number)
//  .storageGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">count</a></code> | <code>java.lang.Number</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer;

GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.builder()
    .count(java.lang.Number)
    .cpu(java.lang.Number)
    .memoryGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count">count</a></code> | <code>java.lang.Number</code> | The number of triggerers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | CPU request and limit for a single Airflow triggerer replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | Memory (GB) request and limit for a single Airflow triggerer replica. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWebServer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer;

GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.builder()
//  .cpu(java.lang.Number)
//  .memoryGb(java.lang.Number)
//  .storageGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWorker <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker;

GoogleComposerEnvironmentConfigWorkloadsConfigWorker.builder()
//  .cpu(java.lang.Number)
//  .maxCount(java.lang.Number)
//  .memoryGb(java.lang.Number)
//  .minCount(java.lang.Number)
//  .storageGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#max_count GoogleComposerEnvironment#max_count}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#min_count GoogleComposerEnvironment#min_count}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentStorageConfig <a name="GoogleComposerEnvironmentStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentStorageConfig;

GoogleComposerEnvironmentStorageConfig.builder()
    .bucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Optional. Name of an existing Cloud Storage bucket to be used by the environment. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#bucket GoogleComposerEnvironment#bucket}

---

### GoogleComposerEnvironmentTimeouts <a name="GoogleComposerEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentTimeouts;

GoogleComposerEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComposerEnvironmentConfigAOutputReference <a name="GoogleComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigAOutputReference;

new GoogleComposerEnvironmentConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig">putDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig">putDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">putMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">putPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig">putRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig">putWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">putWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">putWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">resetDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig">resetDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly">resetEnablePrivateBuildsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment">resetEnablePrivateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">resetEnvironmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">resetMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">resetPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">resetRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode">resetResilienceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig">resetWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">resetWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">resetWorkloadsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseConfig` <a name="putDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```java
public void putDatabaseConfig(GoogleComposerEnvironmentConfigDatabaseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `putDataRetentionConfig` <a name="putDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig"></a>

```java
public void putDataRetentionConfig(GoogleComposerEnvironmentConfigDataRetentionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(GoogleComposerEnvironmentConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleComposerEnvironmentConfigMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `putMasterAuthorizedNetworksConfig` <a name="putMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```java
public void putMasterAuthorizedNetworksConfig(GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```java
public void putNodeConfig(GoogleComposerEnvironmentConfigNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `putPrivateEnvironmentConfig` <a name="putPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```java
public void putPrivateEnvironmentConfig(GoogleComposerEnvironmentConfigPrivateEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `putRecoveryConfig` <a name="putRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```java
public void putRecoveryConfig(GoogleComposerEnvironmentConfigRecoveryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```java
public void putSoftwareConfig(GoogleComposerEnvironmentConfigSoftwareConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `putWebServerConfig` <a name="putWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```java
public void putWebServerConfig(GoogleComposerEnvironmentConfigWebServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `putWebServerNetworkAccessControl` <a name="putWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```java
public void putWebServerNetworkAccessControl(GoogleComposerEnvironmentConfigWebServerNetworkAccessControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `putWorkloadsConfig` <a name="putWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```java
public void putWorkloadsConfig(GoogleComposerEnvironmentConfigWorkloadsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `resetDatabaseConfig` <a name="resetDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```java
public void resetDatabaseConfig()
```

##### `resetDataRetentionConfig` <a name="resetDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig"></a>

```java
public void resetDataRetentionConfig()
```

##### `resetEnablePrivateBuildsOnly` <a name="resetEnablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly"></a>

```java
public void resetEnablePrivateBuildsOnly()
```

##### `resetEnablePrivateEnvironment` <a name="resetEnablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment"></a>

```java
public void resetEnablePrivateEnvironment()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetEnvironmentSize` <a name="resetEnvironmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```java
public void resetEnvironmentSize()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMasterAuthorizedNetworksConfig` <a name="resetMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```java
public void resetMasterAuthorizedNetworksConfig()
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```java
public void resetNodeConfig()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetPrivateEnvironmentConfig` <a name="resetPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```java
public void resetPrivateEnvironmentConfig()
```

##### `resetRecoveryConfig` <a name="resetRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```java
public void resetRecoveryConfig()
```

##### `resetResilienceMode` <a name="resetResilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode"></a>

```java
public void resetResilienceMode()
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```java
public void resetSoftwareConfig()
```

##### `resetWebServerConfig` <a name="resetWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```java
public void resetWebServerConfig()
```

##### `resetWebServerNetworkAccessControl` <a name="resetWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```java
public void resetWebServerNetworkAccessControl()
```

##### `resetWorkloadsConfig` <a name="resetWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```java
public void resetWorkloadsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri">airflowUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">dagGcsPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster">gkeCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">databaseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput">dataRetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput">enablePrivateBuildsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput">enablePrivateEnvironmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">environmentSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">masterAuthorizedNetworksConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">privateEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">recoveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput">resilienceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">webServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">webServerNetworkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">workloadsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly">enablePrivateBuildsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment">enablePrivateEnvironment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize">environmentSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode">resilienceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `airflowUri`<sup>Required</sup> <a name="airflowUri" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```java
public java.lang.String getAirflowUri();
```

- *Type:* java.lang.String

---

##### `dagGcsPrefix`<sup>Required</sup> <a name="dagGcsPrefix" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```java
public java.lang.String getDagGcsPrefix();
```

- *Type:* java.lang.String

---

##### `databaseConfig`<sup>Required</sup> <a name="databaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```java
public GoogleComposerEnvironmentConfigDatabaseConfigOutputReference getDatabaseConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `dataRetentionConfig`<sup>Required</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference getDataRetentionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```java
public GoogleComposerEnvironmentConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```java
public java.lang.String getGkeCluster();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```java
public GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `masterAuthorizedNetworksConfig`<sup>Required</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference getMasterAuthorizedNetworksConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `privateEnvironmentConfig`<sup>Required</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```java
public GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference getPrivateEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `recoveryConfig`<sup>Required</sup> <a name="recoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfigOutputReference getRecoveryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfigOutputReference getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `webServerConfig`<sup>Required</sup> <a name="webServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```java
public GoogleComposerEnvironmentConfigWebServerConfigOutputReference getWebServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `webServerNetworkAccessControl`<sup>Required</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference getWebServerNetworkAccessControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `workloadsConfig`<sup>Required</sup> <a name="workloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference getWorkloadsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `databaseConfigInput`<sup>Optional</sup> <a name="databaseConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigDatabaseConfig getDatabaseConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `dataRetentionConfigInput`<sup>Optional</sup> <a name="dataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfig getDataRetentionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `enablePrivateBuildsOnlyInput`<sup>Optional</sup> <a name="enablePrivateBuildsOnlyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput"></a>

```java
public java.lang.Object getEnablePrivateBuildsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivateEnvironmentInput`<sup>Optional</sup> <a name="enablePrivateEnvironmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput"></a>

```java
public java.lang.Object getEnablePrivateEnvironmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `environmentSizeInput`<sup>Optional</sup> <a name="environmentSizeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```java
public java.lang.String getEnvironmentSizeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```java
public GoogleComposerEnvironmentConfigMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `masterAuthorizedNetworksConfigInput`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig getMasterAuthorizedNetworksConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfig getNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `privateEnvironmentConfigInput`<sup>Optional</sup> <a name="privateEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigPrivateEnvironmentConfig getPrivateEnvironmentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `recoveryConfigInput`<sup>Optional</sup> <a name="recoveryConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfig getRecoveryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `resilienceModeInput`<sup>Optional</sup> <a name="resilienceModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput"></a>

```java
public java.lang.String getResilienceModeInput();
```

- *Type:* java.lang.String

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfig getSoftwareConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `webServerConfigInput`<sup>Optional</sup> <a name="webServerConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigWebServerConfig getWebServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `webServerNetworkAccessControlInput`<sup>Optional</sup> <a name="webServerNetworkAccessControlInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControl getWebServerNetworkAccessControlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `workloadsConfigInput`<sup>Optional</sup> <a name="workloadsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfig getWorkloadsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `enablePrivateBuildsOnly`<sup>Required</sup> <a name="enablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly"></a>

```java
public java.lang.Object getEnablePrivateBuildsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivateEnvironment`<sup>Required</sup> <a name="enablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment"></a>

```java
public java.lang.Object getEnablePrivateEnvironment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentSize`<sup>Required</sup> <a name="environmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```java
public java.lang.String getEnvironmentSize();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `resilienceMode`<sup>Required</sup> <a name="resilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```java
public java.lang.String getResilienceMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---


### GoogleComposerEnvironmentConfigDatabaseConfigOutputReference <a name="GoogleComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference;

new GoogleComposerEnvironmentConfigDatabaseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigDatabaseConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList;

new GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference;

new GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode">resetRetentionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetRetentionMode` <a name="resetRetentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode"></a>

```java
public void resetRetentionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput">retentionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode">retentionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `retentionModeInput`<sup>Optional</sup> <a name="retentionModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput"></a>

```java
public java.lang.String getRetentionModeInput();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `retentionMode`<sup>Required</sup> <a name="retentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode"></a>

```java
public java.lang.String getRetentionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference;

new GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig">putAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig">putTaskLogsRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig">resetAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig">resetTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAirflowMetadataRetentionConfig` <a name="putAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig"></a>

```java
public void putAirflowMetadataRetentionConfig(IResolvable OR java.util.List<GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>>

---

##### `putTaskLogsRetentionConfig` <a name="putTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig"></a>

```java
public void putTaskLogsRetentionConfig(IResolvable OR java.util.List<GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>>

---

##### `resetAirflowMetadataRetentionConfig` <a name="resetAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig"></a>

```java
public void resetAirflowMetadataRetentionConfig()
```

##### `resetTaskLogsRetentionConfig` <a name="resetTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig"></a>

```java
public void resetTaskLogsRetentionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig">airflowMetadataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput">airflowMetadataRetentionConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput">taskLogsRetentionConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `airflowMetadataRetentionConfig`<sup>Required</sup> <a name="airflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList getAirflowMetadataRetentionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a>

---

##### `taskLogsRetentionConfig`<sup>Required</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList getTaskLogsRetentionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `airflowMetadataRetentionConfigInput`<sup>Optional</sup> <a name="airflowMetadataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput"></a>

```java
public java.lang.Object getAirflowMetadataRetentionConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>>

---

##### `taskLogsRetentionConfigInput`<sup>Optional</sup> <a name="taskLogsRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput"></a>

```java
public java.lang.Object getTaskLogsRetentionConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList;

new GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```java
public GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference;

new GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode">resetStorageMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageMode` <a name="resetStorageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode"></a>

```java
public void resetStorageMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput">storageModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">storageMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageModeInput`<sup>Optional</sup> <a name="storageModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput"></a>

```java
public java.lang.String getStorageModeInput();
```

- *Type:* java.lang.String

---

##### `storageMode`<sup>Required</sup> <a name="storageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```java
public java.lang.String getStorageMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigEncryptionConfigOutputReference <a name="GoogleComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference;

new GoogleComposerEnvironmentConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---


### GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference;

new GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```java
public java.lang.String getRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList;

new GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference;

new GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference;

new GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">putCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrBlocks` <a name="putCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```java
public void putCidrBlocks(IResolvable OR java.util.List<GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>>

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```java
public void resetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList getCidrBlocks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```java
public java.lang.Object getCidrBlocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference;

new GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">resetClusterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">resetClusterSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">resetServicesIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">resetServicesSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">resetUseIpAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterIpv4CidrBlock` <a name="resetClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```java
public void resetClusterIpv4CidrBlock()
```

##### `resetClusterSecondaryRangeName` <a name="resetClusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```java
public void resetClusterSecondaryRangeName()
```

##### `resetServicesIpv4CidrBlock` <a name="resetServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```java
public void resetServicesIpv4CidrBlock()
```

##### `resetServicesSecondaryRangeName` <a name="resetServicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```java
public void resetServicesSecondaryRangeName()
```

##### `resetUseIpAliases` <a name="resetUseIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```java
public void resetUseIpAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">clusterIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">clusterSecondaryRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">servicesIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">servicesSecondaryRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">useIpAliasesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">useIpAliases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIpv4CidrBlockInput`<sup>Optional</sup> <a name="clusterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```java
public java.lang.String getClusterIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `clusterSecondaryRangeNameInput`<sup>Optional</sup> <a name="clusterSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```java
public java.lang.String getClusterSecondaryRangeNameInput();
```

- *Type:* java.lang.String

---

##### `servicesIpv4CidrBlockInput`<sup>Optional</sup> <a name="servicesIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```java
public java.lang.String getServicesIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `servicesSecondaryRangeNameInput`<sup>Optional</sup> <a name="servicesSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```java
public java.lang.String getServicesSecondaryRangeNameInput();
```

- *Type:* java.lang.String

---

##### `useIpAliasesInput`<sup>Optional</sup> <a name="useIpAliasesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```java
public java.lang.Object getUseIpAliasesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIpv4CidrBlock`<sup>Required</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```java
public java.lang.String getClusterIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `clusterSecondaryRangeName`<sup>Required</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```java
public java.lang.String getClusterSecondaryRangeName();
```

- *Type:* java.lang.String

---

##### `servicesIpv4CidrBlock`<sup>Required</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```java
public java.lang.String getServicesIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `servicesSecondaryRangeName`<sup>Required</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```java
public java.lang.String getServicesSecondaryRangeName();
```

- *Type:* java.lang.String

---

##### `useIpAliases`<sup>Required</sup> <a name="useIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```java
public java.lang.Object getUseIpAliases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### GoogleComposerEnvironmentConfigNodeConfigOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigNodeConfigOutputReference;

new GoogleComposerEnvironmentConfigNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">putIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock">resetComposerInternalIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment">resetComposerNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">resetEnableIpMasqAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAllocationPolicy` <a name="putIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```java
public void putIpAllocationPolicy(GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `resetComposerInternalIpv4CidrBlock` <a name="resetComposerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock"></a>

```java
public void resetComposerInternalIpv4CidrBlock()
```

##### `resetComposerNetworkAttachment` <a name="resetComposerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment"></a>

```java
public void resetComposerNetworkAttachment()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetEnableIpMasqAgent` <a name="resetEnableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```java
public void resetEnableIpMasqAgent()
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```java
public void resetIpAllocationPolicy()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```java
public void resetMaxPodsPerNode()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```java
public void resetOauthScopes()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput">composerInternalIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput">composerNetworkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">enableIpMasqAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock">composerInternalIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment">composerNetworkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference getIpAllocationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a>

---

##### `composerInternalIpv4CidrBlockInput`<sup>Optional</sup> <a name="composerInternalIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput"></a>

```java
public java.lang.String getComposerInternalIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `composerNetworkAttachmentInput`<sup>Optional</sup> <a name="composerNetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput"></a>

```java
public java.lang.String getComposerNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `enableIpMasqAgentInput`<sup>Optional</sup> <a name="enableIpMasqAgentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```java
public java.lang.Object getEnableIpMasqAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy getIpAllocationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```java
public java.lang.Number getMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `composerInternalIpv4CidrBlock`<sup>Required</sup> <a name="composerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock"></a>

```java
public java.lang.String getComposerInternalIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `composerNetworkAttachment`<sup>Required</sup> <a name="composerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment"></a>

```java
public java.lang.String getComposerNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `enableIpMasqAgent`<sup>Required</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```java
public java.lang.Object getEnableIpMasqAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---


### GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference;

new GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">resetCloudComposerConnectionSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">resetCloudComposerNetworkIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">resetCloudSqlIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">resetEnablePrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">resetEnablePrivatelyUsedPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">resetMasterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">resetWebServerIpv4CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudComposerConnectionSubnetwork` <a name="resetCloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```java
public void resetCloudComposerConnectionSubnetwork()
```

##### `resetCloudComposerNetworkIpv4CidrBlock` <a name="resetCloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```java
public void resetCloudComposerNetworkIpv4CidrBlock()
```

##### `resetCloudSqlIpv4CidrBlock` <a name="resetCloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```java
public void resetCloudSqlIpv4CidrBlock()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetEnablePrivateEndpoint` <a name="resetEnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```java
public void resetEnablePrivateEndpoint()
```

##### `resetEnablePrivatelyUsedPublicIps` <a name="resetEnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```java
public void resetEnablePrivatelyUsedPublicIps()
```

##### `resetMasterIpv4CidrBlock` <a name="resetMasterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```java
public void resetMasterIpv4CidrBlock()
```

##### `resetWebServerIpv4CidrBlock` <a name="resetWebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```java
public void resetWebServerIpv4CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">cloudComposerConnectionSubnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">cloudComposerNetworkIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">cloudSqlIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">enablePrivatelyUsedPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">masterIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">webServerIpv4CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudComposerConnectionSubnetworkInput`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```java
public java.lang.String getCloudComposerConnectionSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `cloudComposerNetworkIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```java
public java.lang.String getCloudComposerNetworkIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `cloudSqlIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```java
public java.lang.String getCloudSqlIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```java
public java.lang.Object getEnablePrivateEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIpsInput`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIpsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```java
public java.lang.Object getEnablePrivatelyUsedPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterIpv4CidrBlockInput`<sup>Optional</sup> <a name="masterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```java
public java.lang.String getMasterIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `webServerIpv4CidrBlockInput`<sup>Optional</sup> <a name="webServerIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```java
public java.lang.String getWebServerIpv4CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `cloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```java
public java.lang.String getCloudComposerConnectionSubnetwork();
```

- *Type:* java.lang.String

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```java
public java.lang.String getCloudComposerNetworkIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `cloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```java
public java.lang.String getCloudSqlIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```java
public java.lang.Object getEnablePrivateEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```java
public java.lang.Object getEnablePrivatelyUsedPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterIpv4CidrBlock`<sup>Required</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```java
public java.lang.String getMasterIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `webServerIpv4CidrBlock`<sup>Required</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```java
public java.lang.String getWebServerIpv4CidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigPrivateEnvironmentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference;

new GoogleComposerEnvironmentConfigRecoveryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">putScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">resetScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduledSnapshotsConfig` <a name="putScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```java
public void putScheduledSnapshotsConfig(GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `resetScheduledSnapshotsConfig` <a name="resetScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```java
public void resetScheduledSnapshotsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">scheduledSnapshotsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduledSnapshotsConfig`<sup>Required</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference getScheduledSnapshotsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `scheduledSnapshotsConfigInput`<sup>Optional</sup> <a name="scheduledSnapshotsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig getScheduledSnapshotsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference;

new GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">resetSnapshotCreationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">resetSnapshotLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnapshotCreationSchedule` <a name="resetSnapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```java
public void resetSnapshotCreationSchedule()
```

##### `resetSnapshotLocation` <a name="resetSnapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```java
public void resetSnapshotLocation()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">snapshotCreationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">snapshotLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">snapshotLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotCreationScheduleInput`<sup>Optional</sup> <a name="snapshotCreationScheduleInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```java
public java.lang.String getSnapshotCreationScheduleInput();
```

- *Type:* java.lang.String

---

##### `snapshotLocationInput`<sup>Optional</sup> <a name="snapshotLocationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```java
public java.lang.String getSnapshotLocationInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotCreationSchedule`<sup>Required</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```java
public java.lang.String getSnapshotCreationSchedule();
```

- *Type:* java.lang.String

---

##### `snapshotLocation`<sup>Required</sup> <a name="snapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```java
public java.lang.String getSnapshotLocation();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference;

new GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference;

new GoogleComposerEnvironmentConfigSoftwareConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration">putCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">resetAirflowConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration">resetCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">resetPypiPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">resetSchedulerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode">resetWebServerPluginsMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudDataLineageIntegration` <a name="putCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration"></a>

```java
public void putCloudDataLineageIntegration(GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `resetAirflowConfigOverrides` <a name="resetAirflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```java
public void resetAirflowConfigOverrides()
```

##### `resetCloudDataLineageIntegration` <a name="resetCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration"></a>

```java
public void resetCloudDataLineageIntegration()
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```java
public void resetEnvVariables()
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```java
public void resetImageVersion()
```

##### `resetPypiPackages` <a name="resetPypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```java
public void resetPypiPackages()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```

##### `resetSchedulerCount` <a name="resetSchedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```java
public void resetSchedulerCount()
```

##### `resetWebServerPluginsMode` <a name="resetWebServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode"></a>

```java
public void resetWebServerPluginsMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">cloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">airflowConfigOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput">cloudDataLineageIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">envVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">imageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">pypiPackagesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">schedulerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput">webServerPluginsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">envVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">pypiPackages</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">schedulerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode">webServerPluginsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudDataLineageIntegration`<sup>Required</sup> <a name="cloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference getCloudDataLineageIntegration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a>

---

##### `airflowConfigOverridesInput`<sup>Optional</sup> <a name="airflowConfigOverridesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cloudDataLineageIntegrationInput`<sup>Optional</sup> <a name="cloudDataLineageIntegrationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration getCloudDataLineageIntegrationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```java
public java.lang.String getImageVersionInput();
```

- *Type:* java.lang.String

---

##### `pypiPackagesInput`<sup>Optional</sup> <a name="pypiPackagesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPypiPackagesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `schedulerCountInput`<sup>Optional</sup> <a name="schedulerCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```java
public java.lang.Number getSchedulerCountInput();
```

- *Type:* java.lang.Number

---

##### `webServerPluginsModeInput`<sup>Optional</sup> <a name="webServerPluginsModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput"></a>

```java
public java.lang.String getWebServerPluginsModeInput();
```

- *Type:* java.lang.String

---

##### `airflowConfigOverrides`<sup>Required</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `pypiPackages`<sup>Required</sup> <a name="pypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPypiPackages();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `schedulerCount`<sup>Required</sup> <a name="schedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```java
public java.lang.Number getSchedulerCount();
```

- *Type:* java.lang.Number

---

##### `webServerPluginsMode`<sup>Required</sup> <a name="webServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode"></a>

```java
public java.lang.String getWebServerPluginsMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigSoftwareConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerConfigOutputReference <a name="GoogleComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference;

new GoogleComposerEnvironmentConfigWebServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWebServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList;

new GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference;

new GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference;

new GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">putAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedIpRange` <a name="putAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```java
public void putAllowedIpRange(IResolvable OR java.util.List<GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>>

---

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```java
public void resetAllowedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList getAllowedIpRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```java
public java.lang.Object getAllowedIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWebServerNetworkAccessControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb"></a>

```java
public void resetMemoryGb()
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb"></a>

```java
public void resetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput"></a>

```java
public java.lang.Number getMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput"></a>

```java
public java.lang.Number getStorageGbInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor">putDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">putScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer">putTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">putWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor">resetDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">resetScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer">resetTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">resetWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDagProcessor` <a name="putDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor"></a>

```java
public void putDagProcessor(GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `putScheduler` <a name="putScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```java
public void putScheduler(GoogleComposerEnvironmentConfigWorkloadsConfigScheduler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `putTriggerer` <a name="putTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer"></a>

```java
public void putTriggerer(GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `putWebServer` <a name="putWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```java
public void putWebServer(GoogleComposerEnvironmentConfigWorkloadsConfigWebServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `putWorker` <a name="putWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```java
public void putWorker(GoogleComposerEnvironmentConfigWorkloadsConfigWorker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `resetDagProcessor` <a name="resetDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor"></a>

```java
public void resetDagProcessor()
```

##### `resetScheduler` <a name="resetScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```java
public void resetScheduler()
```

##### `resetTriggerer` <a name="resetTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer"></a>

```java
public void resetTriggerer()
```

##### `resetWebServer` <a name="resetWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```java
public void resetWebServer()
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```java
public void resetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor">dagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput">dagProcessorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">schedulerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput">triggererInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">webServerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">workerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dagProcessor`<sup>Required</sup> <a name="dagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference getDagProcessor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a>

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference getScheduler();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `triggerer`<sup>Required</sup> <a name="triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference getTriggerer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a>

---

##### `webServer`<sup>Required</sup> <a name="webServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference getWebServer();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference getWorker();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `dagProcessorInput`<sup>Optional</sup> <a name="dagProcessorInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor getDagProcessorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `schedulerInput`<sup>Optional</sup> <a name="schedulerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigScheduler getSchedulerInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `triggererInput`<sup>Optional</sup> <a name="triggererInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer getTriggererInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `webServerInput`<sup>Optional</sup> <a name="webServerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWebServer getWebServerInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWorker getWorkerInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```java
public void resetMemoryGb()
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```java
public void resetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```java
public java.lang.Number getMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```java
public java.lang.Number getStorageGbInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigScheduler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput"></a>

```java
public java.lang.Number getMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```java
public void resetMemoryGb()
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```java
public void resetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```java
public java.lang.Number getMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```java
public java.lang.Number getStorageGbInput();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWebServer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference;

new GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```java
public void resetMaxCount()
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```java
public void resetMemoryGb()
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```java
public void resetMinCount()
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```java
public void resetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">minCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">storageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```java
public java.lang.Number getMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```java
public java.lang.Number getMinCountInput();
```

- *Type:* java.lang.Number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```java
public java.lang.Number getStorageGbInput();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```java
public java.lang.Number getStorageGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentConfigWorkloadsConfigWorker getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### GoogleComposerEnvironmentStorageConfigOutputReference <a name="GoogleComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentStorageConfigOutputReference;

new GoogleComposerEnvironmentStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```java
public GoogleComposerEnvironmentStorageConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---


### GoogleComposerEnvironmentTimeoutsOutputReference <a name="GoogleComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_composer_environment.GoogleComposerEnvironmentTimeoutsOutputReference;

new GoogleComposerEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---



