# `google_game_services_game_server_deployment`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment).

# `googleGameServicesGameServerDeployment` Submodule <a name="`googleGameServicesGameServerDeployment` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerDeployment <a name="GoogleGameServicesGameServerDeployment" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment google_game_services_game_server_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeployment;

GoogleGameServicesGameServerDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGameServicesGameServerDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the game server deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#id GoogleGameServicesGameServerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server deployment. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#project GoogleGameServicesGameServerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#deployment_id GoogleGameServicesGameServerDeployment#deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description of the game server deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#description GoogleGameServicesGameServerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#id GoogleGameServicesGameServerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server deployment. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#labels GoogleGameServicesGameServerDeployment#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#location GoogleGameServicesGameServerDeployment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#project GoogleGameServicesGameServerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#timeouts GoogleGameServicesGameServerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleGameServicesGameServerDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeployment;

GoogleGameServicesGameServerDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeployment;

GoogleGameServicesGameServerDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeployment;

GoogleGameServicesGameServerDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.timeouts"></a>

```java
public GoogleGameServicesGameServerDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentTimeoutsOutputReference</a>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerDeploymentConfig <a name="GoogleGameServicesGameServerDeploymentConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeploymentConfig;

GoogleGameServicesGameServerDeploymentConfig.builder()
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
    .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGameServicesGameServerDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the game server deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#id GoogleGameServicesGameServerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server deployment. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#project GoogleGameServicesGameServerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#deployment_id GoogleGameServicesGameServerDeployment#deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description of the game server deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#description GoogleGameServicesGameServerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#id GoogleGameServicesGameServerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server deployment. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#labels GoogleGameServicesGameServerDeployment#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#location GoogleGameServicesGameServerDeployment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#project GoogleGameServicesGameServerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentConfig.property.timeouts"></a>

```java
public GoogleGameServicesGameServerDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#timeouts GoogleGameServicesGameServerDeployment#timeouts}

---

### GoogleGameServicesGameServerDeploymentTimeouts <a name="GoogleGameServicesGameServerDeploymentTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeploymentTimeouts;

GoogleGameServicesGameServerDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#create GoogleGameServicesGameServerDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#delete GoogleGameServicesGameServerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#update GoogleGameServicesGameServerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#create GoogleGameServicesGameServerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#delete GoogleGameServicesGameServerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment#update GoogleGameServicesGameServerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerDeploymentTimeoutsOutputReference <a name="GoogleGameServicesGameServerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_deployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference;

new GoogleGameServicesGameServerDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeployment.GoogleGameServicesGameServerDeploymentTimeouts">GoogleGameServicesGameServerDeploymentTimeouts</a>

---



