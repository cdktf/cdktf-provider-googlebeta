# `googleSecureSourceManagerRepository` Submodule <a name="`googleSecureSourceManagerRepository` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerRepository <a name="GoogleSecureSourceManagerRepository" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository google_secure_source_manager_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepository;

GoogleSecureSourceManagerRepository.Builder.create(Construct scope, java.lang.String id)
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialConfig(GoogleSecureSourceManagerRepositoryInitialConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerRepositoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#instance GoogleSecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#location GoogleSecureSourceManagerRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#repository_id GoogleSecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#description GoogleSecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfig`<sup>Optional</sup> <a name="initialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.initialConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#initial_config GoogleSecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#timeouts GoogleSecureSourceManagerRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig">putInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetInitialConfig">resetInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialConfig` <a name="putInitialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig"></a>

```java
public void putInitialConfig(GoogleSecureSourceManagerRepositoryInitialConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts"></a>

```java
public void putTimeouts(GoogleSecureSourceManagerRepositoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetId"></a>

```java
public void resetId()
```

##### `resetInitialConfig` <a name="resetInitialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetInitialConfig"></a>

```java
public void resetInitialConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepository;

GoogleSecureSourceManagerRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepository;

GoogleSecureSourceManagerRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepository;

GoogleSecureSourceManagerRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepository;

GoogleSecureSourceManagerRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecureSourceManagerRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSecureSourceManagerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecureSourceManagerRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecureSourceManagerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference">GoogleSecureSourceManagerRepositoryInitialConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference">GoogleSecureSourceManagerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uris">uris</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList">GoogleSecureSourceManagerRepositoryUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfigInput">initialConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `initialConfig`<sup>Required</sup> <a name="initialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfig"></a>

```java
public GoogleSecureSourceManagerRepositoryInitialConfigOutputReference getInitialConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference">GoogleSecureSourceManagerRepositoryInitialConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeouts"></a>

```java
public GoogleSecureSourceManagerRepositoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference">GoogleSecureSourceManagerRepositoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uris"></a>

```java
public GoogleSecureSourceManagerRepositoryUrisList getUris();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList">GoogleSecureSourceManagerRepositoryUrisList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialConfigInput`<sup>Optional</sup> <a name="initialConfigInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfigInput"></a>

```java
public GoogleSecureSourceManagerRepositoryInitialConfig getInitialConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerRepositoryConfig <a name="GoogleSecureSourceManagerRepositoryConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryConfig;

GoogleSecureSourceManagerRepositoryConfig.builder()
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialConfig(GoogleSecureSourceManagerRepositoryInitialConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerRepositoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.initialConfig">initialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#instance GoogleSecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#location GoogleSecureSourceManagerRepository#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#repository_id GoogleSecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#description GoogleSecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfig`<sup>Optional</sup> <a name="initialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.initialConfig"></a>

```java
public GoogleSecureSourceManagerRepositoryInitialConfig getInitialConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#initial_config GoogleSecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.timeouts"></a>

```java
public GoogleSecureSourceManagerRepositoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#timeouts GoogleSecureSourceManagerRepository#timeouts}

---

### GoogleSecureSourceManagerRepositoryInitialConfig <a name="GoogleSecureSourceManagerRepositoryInitialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryInitialConfig;

GoogleSecureSourceManagerRepositoryInitialConfig.builder()
//  .defaultBranch(java.lang.String)
//  .gitignores(java.util.List<java.lang.String>)
//  .license(java.lang.String)
//  .readme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Default branch name of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.gitignores">gitignores</a></code> | <code>java.util.List<java.lang.String></code> | List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.license">license</a></code> | <code>java.lang.String</code> | License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.readme">readme</a></code> | <code>java.lang.String</code> | README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Default branch name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#default_branch GoogleSecureSourceManagerRepository#default_branch}

---

##### `gitignores`<sup>Optional</sup> <a name="gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.gitignores"></a>

```java
public java.util.List<java.lang.String> getGitignores();
```

- *Type:* java.util.List<java.lang.String>

List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#gitignores GoogleSecureSourceManagerRepository#gitignores}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#license GoogleSecureSourceManagerRepository#license}

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.readme"></a>

```java
public java.lang.String getReadme();
```

- *Type:* java.lang.String

README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#readme GoogleSecureSourceManagerRepository#readme}

---

### GoogleSecureSourceManagerRepositoryTimeouts <a name="GoogleSecureSourceManagerRepositoryTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryTimeouts;

GoogleSecureSourceManagerRepositoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#create GoogleSecureSourceManagerRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#delete GoogleSecureSourceManagerRepository#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#create GoogleSecureSourceManagerRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secure_source_manager_repository#delete GoogleSecureSourceManagerRepository#delete}.

---

### GoogleSecureSourceManagerRepositoryUris <a name="GoogleSecureSourceManagerRepositoryUris" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryUris;

GoogleSecureSourceManagerRepositoryUris.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerRepositoryInitialConfigOutputReference <a name="GoogleSecureSourceManagerRepositoryInitialConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference;

new GoogleSecureSourceManagerRepositoryInitialConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores">resetGitignores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme">resetReadme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetGitignores` <a name="resetGitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores"></a>

```java
public void resetGitignores()
```

##### `resetLicense` <a name="resetLicense" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense"></a>

```java
public void resetLicense()
```

##### `resetReadme` <a name="resetReadme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme"></a>

```java
public void resetReadme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput">gitignoresInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput">readmeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores">gitignores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readme">readme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `gitignoresInput`<sup>Optional</sup> <a name="gitignoresInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput"></a>

```java
public java.util.List<java.lang.String> getGitignoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `readmeInput`<sup>Optional</sup> <a name="readmeInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput"></a>

```java
public java.lang.String getReadmeInput();
```

- *Type:* java.lang.String

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `gitignores`<sup>Required</sup> <a name="gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores"></a>

```java
public java.util.List<java.lang.String> getGitignores();
```

- *Type:* java.util.List<java.lang.String>

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `readme`<sup>Required</sup> <a name="readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readme"></a>

```java
public java.lang.String getReadme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerRepositoryInitialConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

---


### GoogleSecureSourceManagerRepositoryTimeoutsOutputReference <a name="GoogleSecureSourceManagerRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference;

new GoogleSecureSourceManagerRepositoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

---


### GoogleSecureSourceManagerRepositoryUrisList <a name="GoogleSecureSourceManagerRepositoryUrisList" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryUrisList;

new GoogleSecureSourceManagerRepositoryUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get"></a>

```java
public GoogleSecureSourceManagerRepositoryUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSecureSourceManagerRepositoryUrisOutputReference <a name="GoogleSecureSourceManagerRepositoryUrisOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secure_source_manager_repository.GoogleSecureSourceManagerRepositoryUrisOutputReference;

new GoogleSecureSourceManagerRepositoryUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.gitHttps">gitHttps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.html">html</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris">GoogleSecureSourceManagerRepositoryUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `gitHttps`<sup>Required</sup> <a name="gitHttps" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.gitHttps"></a>

```java
public java.lang.String getGitHttps();
```

- *Type:* java.lang.String

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.html"></a>

```java
public java.lang.String getHtml();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerRepositoryUris getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris">GoogleSecureSourceManagerRepositoryUris</a>

---



