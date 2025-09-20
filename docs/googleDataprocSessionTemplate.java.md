# `googleDataprocSessionTemplate` Submodule <a name="`googleDataprocSessionTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocSessionTemplate <a name="GoogleDataprocSessionTemplate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplate;

GoogleDataprocSessionTemplate.Builder.create(Construct scope, java.lang.String id)
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
//  .environmentConfig(GoogleDataprocSessionTemplateEnvironmentConfig)
//  .id(java.lang.String)
//  .jupyterSession(GoogleDataprocSessionTemplateJupyterSession)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .runtimeConfig(GoogleDataprocSessionTemplateRuntimeConfig)
//  .sparkConnectSession(GoogleDataprocSessionTemplateSparkConnectSession)
//  .timeouts(GoogleDataprocSessionTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterSession`<sup>Optional</sup> <a name="jupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.jupyterSession"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}.

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}

---

##### `sparkConnectSession`<sup>Optional</sup> <a name="sparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.sparkConnectSession"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig">putEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession">putJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession">putSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig">resetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession">resetJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession">resetSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentConfig` <a name="putEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig"></a>

```java
public void putEnvironmentConfig(GoogleDataprocSessionTemplateEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---

##### `putJupyterSession` <a name="putJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession"></a>

```java
public void putJupyterSession(GoogleDataprocSessionTemplateJupyterSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig"></a>

```java
public void putRuntimeConfig(GoogleDataprocSessionTemplateRuntimeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---

##### `putSparkConnectSession` <a name="putSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession"></a>

```java
public void putSparkConnectSession(GoogleDataprocSessionTemplateSparkConnectSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocSessionTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

---

##### `resetEnvironmentConfig` <a name="resetEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig"></a>

```java
public void resetEnvironmentConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetJupyterSession` <a name="resetJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession"></a>

```java
public void resetJupyterSession()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig"></a>

```java
public void resetRuntimeConfig()
```

##### `resetSparkConnectSession` <a name="resetSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession"></a>

```java
public void resetSparkConnectSession()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplate;

GoogleDataprocSessionTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplate;

GoogleDataprocSessionTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplate;

GoogleDataprocSessionTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplate;

GoogleDataprocSessionTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocSessionTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocSessionTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput">environmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput">jupyterSessionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput">sparkConnectSessionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `environmentConfig`<sup>Required</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigOutputReference getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `jupyterSession`<sup>Required</sup> <a name="jupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession"></a>

```java
public GoogleDataprocSessionTemplateJupyterSessionOutputReference getJupyterSession();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig"></a>

```java
public GoogleDataprocSessionTemplateRuntimeConfigOutputReference getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `sparkConnectSession`<sup>Required</sup> <a name="sparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession"></a>

```java
public GoogleDataprocSessionTemplateSparkConnectSessionOutputReference getSparkConnectSession();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts"></a>

```java
public GoogleDataprocSessionTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `environmentConfigInput`<sup>Optional</sup> <a name="environmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfig getEnvironmentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jupyterSessionInput`<sup>Optional</sup> <a name="jupyterSessionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput"></a>

```java
public GoogleDataprocSessionTemplateJupyterSession getJupyterSessionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput"></a>

```java
public GoogleDataprocSessionTemplateRuntimeConfig getRuntimeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---

##### `sparkConnectSessionInput`<sup>Optional</sup> <a name="sparkConnectSessionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```java
public GoogleDataprocSessionTemplateSparkConnectSession getSparkConnectSessionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocSessionTemplateConfig <a name="GoogleDataprocSessionTemplateConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateConfig;

GoogleDataprocSessionTemplateConfig.builder()
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
//  .environmentConfig(GoogleDataprocSessionTemplateEnvironmentConfig)
//  .id(java.lang.String)
//  .jupyterSession(GoogleDataprocSessionTemplateJupyterSession)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .runtimeConfig(GoogleDataprocSessionTemplateRuntimeConfig)
//  .sparkConnectSession(GoogleDataprocSessionTemplateSparkConnectSession)
//  .timeouts(GoogleDataprocSessionTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfig getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterSession`<sup>Optional</sup> <a name="jupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession"></a>

```java
public GoogleDataprocSessionTemplateJupyterSession getJupyterSession();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}.

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig"></a>

```java
public GoogleDataprocSessionTemplateRuntimeConfig getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}

---

##### `sparkConnectSession`<sup>Optional</sup> <a name="sparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```java
public GoogleDataprocSessionTemplateSparkConnectSession getSparkConnectSession();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts"></a>

```java
public GoogleDataprocSessionTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}

---

### GoogleDataprocSessionTemplateEnvironmentConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfig;

GoogleDataprocSessionTemplateEnvironmentConfig.builder()
//  .executionConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig)
//  .peripheralsConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `executionConfig`<sup>Optional</sup> <a name="executionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#execution_config GoogleDataprocSessionTemplate#execution_config}

---

##### `peripheralsConfig`<sup>Optional</sup> <a name="peripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#peripherals_config GoogleDataprocSessionTemplate#peripherals_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig;

GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.builder()
//  .authenticationConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig)
//  .idleTtl(java.lang.String)
//  .kmsKey(java.lang.String)
//  .networkTags(java.util.List<java.lang.String>)
//  .serviceAccount(java.lang.String)
//  .stagingBucket(java.lang.String)
//  .subnetworkUri(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl">idleTtl</a></code> | <code>java.lang.String</code> | The duration to keep the session alive while it's idling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The duration after which the workload will be terminated. |

---

##### `authenticationConfig`<sup>Optional</sup> <a name="authenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig getAuthenticationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#authentication_config GoogleDataprocSessionTemplate#authentication_config}

---

##### `idleTtl`<sup>Optional</sup> <a name="idleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl"></a>

```java
public java.lang.String getIdleTtl();
```

- *Type:* java.lang.String

The duration to keep the session alive while it's idling.

Exceeding this threshold causes the session to terminate. Minimum value is 10 minutes; maximum value is 14 day.
Defaults to 1 hour if not set. If both ttl and idleTtl are specified for an interactive session, the conditions
are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or when ttl has
been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#idle_ttl GoogleDataprocSessionTemplate#idle_ttl}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#kms_key GoogleDataprocSessionTemplate#kms_key}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#network_tags GoogleDataprocSessionTemplate#network_tags}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#service_account GoogleDataprocSessionTemplate#service_account}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#staging_bucket GoogleDataprocSessionTemplate#staging_bucket}

---

##### `subnetworkUri`<sup>Optional</sup> <a name="subnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#subnetwork_uri GoogleDataprocSessionTemplate#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#ttl GoogleDataprocSessionTemplate#ttl}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig;

GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.builder()
//  .userWorkloadAuthenticationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType">userWorkloadAuthenticationType</a></code> | <code>java.lang.String</code> | Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"]. |

---

##### `userWorkloadAuthenticationType`<sup>Optional</sup> <a name="userWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType"></a>

```java
public java.lang.String getUserWorkloadAuthenticationType();
```

- *Type:* java.lang.String

Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#user_workload_authentication_type GoogleDataprocSessionTemplate#user_workload_authentication_type}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig;

GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.builder()
//  .metastoreService(java.lang.String)
//  .sparkHistoryServerConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#metastore_service GoogleDataprocSessionTemplate#metastore_service}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#spark_history_server_config GoogleDataprocSessionTemplate#spark_history_server_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;

GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#dataproc_cluster GoogleDataprocSessionTemplate#dataproc_cluster}

---

### GoogleDataprocSessionTemplateJupyterSession <a name="GoogleDataprocSessionTemplateJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateJupyterSession;

GoogleDataprocSessionTemplateJupyterSession.builder()
//  .displayName(java.lang.String)
//  .kernel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel">kernel</a></code> | <code>java.lang.String</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#display_name GoogleDataprocSessionTemplate#display_name}

---

##### `kernel`<sup>Optional</sup> <a name="kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel"></a>

```java
public java.lang.String getKernel();
```

- *Type:* java.lang.String

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#kernel GoogleDataprocSessionTemplate#kernel}

---

### GoogleDataprocSessionTemplateRuntimeConfig <a name="GoogleDataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateRuntimeConfig;

GoogleDataprocSessionTemplateRuntimeConfig.builder()
//  .containerImage(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version">version</a></code> | <code>java.lang.String</code> | Version of the session runtime. |

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#container_image GoogleDataprocSessionTemplate#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#properties GoogleDataprocSessionTemplate#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#version GoogleDataprocSessionTemplate#version}

---

### GoogleDataprocSessionTemplateSparkConnectSession <a name="GoogleDataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateSparkConnectSession;

GoogleDataprocSessionTemplateSparkConnectSession.builder()
    .build();
```


### GoogleDataprocSessionTemplateTimeouts <a name="GoogleDataprocSessionTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateTimeouts;

GoogleDataprocSessionTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType">resetUserWorkloadAuthenticationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserWorkloadAuthenticationType` <a name="resetUserWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType"></a>

```java
public void resetUserWorkloadAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput">userWorkloadAuthenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType">userWorkloadAuthenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userWorkloadAuthenticationTypeInput`<sup>Optional</sup> <a name="userWorkloadAuthenticationTypeInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput"></a>

```java
public java.lang.String getUserWorkloadAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `userWorkloadAuthenticationType`<sup>Required</sup> <a name="userWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType"></a>

```java
public java.lang.String getUserWorkloadAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig">putAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig">resetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl">resetIdleTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">resetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfig` <a name="putAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig"></a>

```java
public void putAuthenticationConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `resetAuthenticationConfig` <a name="resetAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig"></a>

```java
public void resetAuthenticationConfig()
```

##### `resetIdleTtl` <a name="resetIdleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl"></a>

```java
public void resetIdleTtl()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```java
public void resetNetworkTags()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```java
public void resetStagingBucket()
```

##### `resetSubnetworkUri` <a name="resetSubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```java
public void resetSubnetworkUri()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig">authenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput">authenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput">idleTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetworkUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl">idleTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference getAuthenticationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a>

---

##### `authenticationConfigInput`<sup>Optional</sup> <a name="authenticationConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig getAuthenticationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `idleTtlInput`<sup>Optional</sup> <a name="idleTtlInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput"></a>

```java
public java.lang.String getIdleTtlInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```java
public java.lang.String getStagingBucketInput();
```

- *Type:* java.lang.String

---

##### `subnetworkUriInput`<sup>Optional</sup> <a name="subnetworkUriInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```java
public java.lang.String getSubnetworkUriInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl"></a>

```java
public java.lang.String getIdleTtl();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

---

##### `subnetworkUri`<sup>Required</sup> <a name="subnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference;

new GoogleDataprocSessionTemplateEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">putExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">putPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">resetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">resetPeripheralsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionConfig` <a name="putExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```java
public void putExecutionConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `putPeripheralsConfig` <a name="putPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```java
public void putPeripheralsConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `resetExecutionConfig` <a name="resetExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```java
public void resetExecutionConfig()
```

##### `resetPeripheralsConfig` <a name="resetPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```java
public void resetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">executionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionConfig`<sup>Required</sup> <a name="executionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripheralsConfig`<sup>Required</sup> <a name="peripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `executionConfigInput`<sup>Optional</sup> <a name="executionConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig getExecutionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `peripheralsConfigInput`<sup>Optional</sup> <a name="peripheralsConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig getPeripheralsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```java
public void resetMetastoreService()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```java
public java.lang.String getMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocSessionTemplateJupyterSessionOutputReference <a name="GoogleDataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateJupyterSessionOutputReference;

new GoogleDataprocSessionTemplateJupyterSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel">resetKernel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetKernel` <a name="resetKernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```java
public void resetKernel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">kernelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel">kernel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `kernelInput`<sup>Optional</sup> <a name="kernelInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```java
public java.lang.String getKernelInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `kernel`<sup>Required</sup> <a name="kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```java
public java.lang.String getKernel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateJupyterSession getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---


### GoogleDataprocSessionTemplateRuntimeConfigOutputReference <a name="GoogleDataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateRuntimeConfigOutputReference;

new GoogleDataprocSessionTemplateRuntimeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">effectiveProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveProperties`<sup>Required</sup> <a name="effectiveProperties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```java
public StringMap getEffectiveProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```java
public java.lang.String getContainerImageInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateRuntimeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---


### GoogleDataprocSessionTemplateSparkConnectSessionOutputReference <a name="GoogleDataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference;

new GoogleDataprocSessionTemplateSparkConnectSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```java
public GoogleDataprocSessionTemplateSparkConnectSession getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---


### GoogleDataprocSessionTemplateTimeoutsOutputReference <a name="GoogleDataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_session_template.GoogleDataprocSessionTemplateTimeoutsOutputReference;

new GoogleDataprocSessionTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

---



