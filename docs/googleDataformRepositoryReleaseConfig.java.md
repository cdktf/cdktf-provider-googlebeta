# `googleDataformRepositoryReleaseConfig` Submodule <a name="`googleDataformRepositoryReleaseConfig` Submodule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepositoryReleaseConfig <a name="GoogleDataformRepositoryReleaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfig;

GoogleDataformRepositoryReleaseConfig.Builder.create(Construct scope, java.lang.String id)
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
    .gitCommitish(java.lang.String)
    .name(java.lang.String)
//  .codeCompilationConfig(GoogleDataformRepositoryReleaseConfigCodeCompilationConfig)
//  .cronSchedule(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(GoogleDataformRepositoryReleaseConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The release's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish"></a>

- *Type:* java.lang.String

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#git_commitish GoogleDataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#name GoogleDataformRepositoryReleaseConfig#name}

---

##### `codeCompilationConfig`<sup>Optional</sup> <a name="codeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#code_compilation_config GoogleDataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#cron_schedule GoogleDataformRepositoryReleaseConfig#cron_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#region GoogleDataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#repository GoogleDataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#timeouts GoogleDataformRepositoryReleaseConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#time_zone GoogleDataformRepositoryReleaseConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig">putCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCodeCompilationConfig">resetCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeCompilationConfig` <a name="putCodeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```java
public void putCodeCompilationConfig(GoogleDataformRepositoryReleaseConfigCodeCompilationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataformRepositoryReleaseConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

---

##### `resetCodeCompilationConfig` <a name="resetCodeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```java
public void resetCodeCompilationConfig()
```

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataformRepositoryReleaseConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfig;

GoogleDataformRepositoryReleaseConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfig;

GoogleDataformRepositoryReleaseConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfig;

GoogleDataformRepositoryReleaseConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfig;

GoogleDataformRepositoryReleaseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataformRepositoryReleaseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataformRepositoryReleaseConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataformRepositoryReleaseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">recentScheduledReleaseRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference">GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfigInput">codeCompilationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitishInput">gitCommitishInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeCompilationConfig`<sup>Required</sup> <a name="codeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```java
public GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference getCodeCompilationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `recentScheduledReleaseRecords`<sup>Required</sup> <a name="recentScheduledReleaseRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList getRecentScheduledReleaseRecords();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeouts"></a>

```java
public GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference">GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `codeCompilationConfigInput`<sup>Optional</sup> <a name="codeCompilationConfigInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```java
public GoogleDataformRepositoryReleaseConfigCodeCompilationConfig getCodeCompilationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `gitCommitishInput`<sup>Optional</sup> <a name="gitCommitishInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```java
public java.lang.String getGitCommitishInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitish"></a>

```java
public java.lang.String getGitCommitish();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryReleaseConfigCodeCompilationConfig <a name="GoogleDataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig;

GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.builder()
//  .assertionSchema(java.lang.String)
//  .databaseSuffix(java.lang.String)
//  .defaultDatabase(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .defaultSchema(java.lang.String)
//  .schemaSuffix(java.lang.String)
//  .tablePrefix(java.lang.String)
//  .vars(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">assertionSchema</a></code> | <code>java.lang.String</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">databaseSuffix</a></code> | <code>java.lang.String</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">defaultDatabase</a></code> | <code>java.lang.String</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">defaultSchema</a></code> | <code>java.lang.String</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">schemaSuffix</a></code> | <code>java.lang.String</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">vars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |

---

##### `assertionSchema`<sup>Optional</sup> <a name="assertionSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```java
public java.lang.String getAssertionSchema();
```

- *Type:* java.lang.String

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#assertion_schema GoogleDataformRepositoryReleaseConfig#assertion_schema}

---

##### `databaseSuffix`<sup>Optional</sup> <a name="databaseSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```java
public java.lang.String getDatabaseSuffix();
```

- *Type:* java.lang.String

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#database_suffix GoogleDataformRepositoryReleaseConfig#database_suffix}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```java
public java.lang.String getDefaultDatabase();
```

- *Type:* java.lang.String

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#default_database GoogleDataformRepositoryReleaseConfig#default_database}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#default_location GoogleDataformRepositoryReleaseConfig#default_location}

---

##### `defaultSchema`<sup>Optional</sup> <a name="defaultSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```java
public java.lang.String getDefaultSchema();
```

- *Type:* java.lang.String

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#default_schema GoogleDataformRepositoryReleaseConfig#default_schema}

---

##### `schemaSuffix`<sup>Optional</sup> <a name="schemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```java
public java.lang.String getSchemaSuffix();
```

- *Type:* java.lang.String

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#schema_suffix GoogleDataformRepositoryReleaseConfig#schema_suffix}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#table_prefix GoogleDataformRepositoryReleaseConfig#table_prefix}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#vars GoogleDataformRepositoryReleaseConfig#vars}

---

### GoogleDataformRepositoryReleaseConfigConfig <a name="GoogleDataformRepositoryReleaseConfigConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigConfig;

GoogleDataformRepositoryReleaseConfigConfig.builder()
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
    .gitCommitish(java.lang.String)
    .name(java.lang.String)
//  .codeCompilationConfig(GoogleDataformRepositoryReleaseConfigCodeCompilationConfig)
//  .cronSchedule(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .repository(java.lang.String)
//  .timeouts(GoogleDataformRepositoryReleaseConfigTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.gitCommitish">gitCommitish</a></code> | <code>java.lang.String</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The release's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```java
public java.lang.String getGitCommitish();
```

- *Type:* java.lang.String

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#git_commitish GoogleDataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#name GoogleDataformRepositoryReleaseConfig#name}

---

##### `codeCompilationConfig`<sup>Optional</sup> <a name="codeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```java
public GoogleDataformRepositoryReleaseConfigCodeCompilationConfig getCodeCompilationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#code_compilation_config GoogleDataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#cron_schedule GoogleDataformRepositoryReleaseConfig#cron_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#region GoogleDataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#repository GoogleDataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```java
public GoogleDataformRepositoryReleaseConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#timeouts GoogleDataformRepositoryReleaseConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#time_zone GoogleDataformRepositoryReleaseConfig#time_zone}

---

### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords;

GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords.builder()
    .build();
```


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus;

GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.builder()
    .build();
```


### GoogleDataformRepositoryReleaseConfigTimeouts <a name="GoogleDataformRepositoryReleaseConfigTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigTimeouts;

GoogleDataformRepositoryReleaseConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference;

new GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">resetAssertionSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">resetDatabaseSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">resetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">resetDefaultSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">resetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">resetVars</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssertionSchema` <a name="resetAssertionSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```java
public void resetAssertionSchema()
```

##### `resetDatabaseSuffix` <a name="resetDatabaseSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```java
public void resetDatabaseSuffix()
```

##### `resetDefaultDatabase` <a name="resetDefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```java
public void resetDefaultDatabase()
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```java
public void resetDefaultLocation()
```

##### `resetDefaultSchema` <a name="resetDefaultSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```java
public void resetDefaultSchema()
```

##### `resetSchemaSuffix` <a name="resetSchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```java
public void resetSchemaSuffix()
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```java
public void resetTablePrefix()
```

##### `resetVars` <a name="resetVars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```java
public void resetVars()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">assertionSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">databaseSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">defaultDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">defaultLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">defaultSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">schemaSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">tablePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">varsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">assertionSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">databaseSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">defaultDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">defaultSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">schemaSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">vars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assertionSchemaInput`<sup>Optional</sup> <a name="assertionSchemaInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```java
public java.lang.String getAssertionSchemaInput();
```

- *Type:* java.lang.String

---

##### `databaseSuffixInput`<sup>Optional</sup> <a name="databaseSuffixInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```java
public java.lang.String getDatabaseSuffixInput();
```

- *Type:* java.lang.String

---

##### `defaultDatabaseInput`<sup>Optional</sup> <a name="defaultDatabaseInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```java
public java.lang.String getDefaultDatabaseInput();
```

- *Type:* java.lang.String

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```java
public java.lang.String getDefaultLocationInput();
```

- *Type:* java.lang.String

---

##### `defaultSchemaInput`<sup>Optional</sup> <a name="defaultSchemaInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```java
public java.lang.String getDefaultSchemaInput();
```

- *Type:* java.lang.String

---

##### `schemaSuffixInput`<sup>Optional</sup> <a name="schemaSuffixInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```java
public java.lang.String getSchemaSuffixInput();
```

- *Type:* java.lang.String

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```java
public java.lang.String getTablePrefixInput();
```

- *Type:* java.lang.String

---

##### `varsInput`<sup>Optional</sup> <a name="varsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `assertionSchema`<sup>Required</sup> <a name="assertionSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```java
public java.lang.String getAssertionSchema();
```

- *Type:* java.lang.String

---

##### `databaseSuffix`<sup>Required</sup> <a name="databaseSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```java
public java.lang.String getDatabaseSuffix();
```

- *Type:* java.lang.String

---

##### `defaultDatabase`<sup>Required</sup> <a name="defaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```java
public java.lang.String getDefaultDatabase();
```

- *Type:* java.lang.String

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

---

##### `defaultSchema`<sup>Required</sup> <a name="defaultSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```java
public java.lang.String getDefaultSchema();
```

- *Type:* java.lang.String

---

##### `schemaSuffix`<sup>Required</sup> <a name="schemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```java
public java.lang.String getSchemaSuffix();
```

- *Type:* java.lang.String

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataformRepositoryReleaseConfigCodeCompilationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList;

new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference;

new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList;

new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference;

new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">compilationResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">releaseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compilationResult`<sup>Required</sup> <a name="compilationResult" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```java
public java.lang.String getCompilationResult();
```

- *Type:* java.lang.String

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList getErrorStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `releaseTime`<sup>Required</sup> <a name="releaseTime" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```java
public java.lang.String getReleaseTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```java
public GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference <a name="GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataform_repository_release_config.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference;

new GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

---



