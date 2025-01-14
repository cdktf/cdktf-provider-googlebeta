# `googleMonitoringService` Submodule <a name="`googleMonitoringService` Submodule" id="@cdktf/provider-google-beta.googleMonitoringService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringService <a name="GoogleMonitoringService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service google_monitoring_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringService;

GoogleMonitoringService.Builder.create(Construct scope, java.lang.String id)
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
    .serviceId(java.lang.String)
//  .basicService(GoogleMonitoringServiceBasicService)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMonitoringServiceTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | An optional service ID to use. If not given, the server will generate a service ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.basicService">basicService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a></code> | basic_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#id GoogleMonitoringService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#project GoogleMonitoringService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels which have been used to annotate the service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

An optional service ID to use. If not given, the server will generate a service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#service_id GoogleMonitoringService#service_id}

---

##### `basicService`<sup>Optional</sup> <a name="basicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.basicService"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a>

basic_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#basic_service GoogleMonitoringService#basic_service}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name used for UI elements listing this Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#display_name GoogleMonitoringService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#id GoogleMonitoringService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#project GoogleMonitoringService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#timeouts GoogleMonitoringService#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels which have been used to annotate the service.

Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#user_labels GoogleMonitoringService#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putBasicService">putBasicService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetBasicService">resetBasicService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBasicService` <a name="putBasicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putBasicService"></a>

```java
public void putBasicService(GoogleMonitoringServiceBasicService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putBasicService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putTimeouts"></a>

```java
public void putTimeouts(GoogleMonitoringServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a>

---

##### `resetBasicService` <a name="resetBasicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetBasicService"></a>

```java
public void resetBasicService()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.resetUserLabels"></a>

```java
public void resetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringService;

GoogleMonitoringService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringService;

GoogleMonitoringService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringService;

GoogleMonitoringService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringService;

GoogleMonitoringService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMonitoringService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleMonitoringService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMonitoringService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMonitoringService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.basicService">basicService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference">GoogleMonitoringServiceBasicServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList">GoogleMonitoringServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference">GoogleMonitoringServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.basicServiceInput">basicServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `basicService`<sup>Required</sup> <a name="basicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.basicService"></a>

```java
public GoogleMonitoringServiceBasicServiceOutputReference getBasicService();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference">GoogleMonitoringServiceBasicServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.telemetry"></a>

```java
public GoogleMonitoringServiceTelemetryList getTelemetry();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList">GoogleMonitoringServiceTelemetryList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.timeouts"></a>

```java
public GoogleMonitoringServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference">GoogleMonitoringServiceTimeoutsOutputReference</a>

---

##### `basicServiceInput`<sup>Optional</sup> <a name="basicServiceInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.basicServiceInput"></a>

```java
public GoogleMonitoringServiceBasicService getBasicServiceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringServiceBasicService <a name="GoogleMonitoringServiceBasicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceBasicService;

GoogleMonitoringServiceBasicService.builder()
//  .serviceLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService.property.serviceLabels">serviceLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this 'Service'. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | The type of service that this basic service defines, e.g. APP_ENGINE service type. |

---

##### `serviceLabels`<sup>Optional</sup> <a name="serviceLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService.property.serviceLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this 'Service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#service_labels GoogleMonitoringService#service_labels}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

The type of service that this basic service defines, e.g. APP_ENGINE service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#service_type GoogleMonitoringService#service_type}

---

### GoogleMonitoringServiceConfig <a name="GoogleMonitoringServiceConfig" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceConfig;

GoogleMonitoringServiceConfig.builder()
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
    .serviceId(java.lang.String)
//  .basicService(GoogleMonitoringServiceBasicService)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMonitoringServiceTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | An optional service ID to use. If not given, the server will generate a service ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.basicService">basicService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a></code> | basic_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#id GoogleMonitoringService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#project GoogleMonitoringService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels which have been used to annotate the service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

An optional service ID to use. If not given, the server will generate a service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#service_id GoogleMonitoringService#service_id}

---

##### `basicService`<sup>Optional</sup> <a name="basicService" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.basicService"></a>

```java
public GoogleMonitoringServiceBasicService getBasicService();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a>

basic_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#basic_service GoogleMonitoringService#basic_service}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name used for UI elements listing this Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#display_name GoogleMonitoringService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#id GoogleMonitoringService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#project GoogleMonitoringService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.timeouts"></a>

```java
public GoogleMonitoringServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#timeouts GoogleMonitoringService#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels which have been used to annotate the service.

Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#user_labels GoogleMonitoringService#user_labels}

---

### GoogleMonitoringServiceTelemetry <a name="GoogleMonitoringServiceTelemetry" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceTelemetry;

GoogleMonitoringServiceTelemetry.builder()
    .build();
```


### GoogleMonitoringServiceTimeouts <a name="GoogleMonitoringServiceTimeouts" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceTimeouts;

GoogleMonitoringServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#create GoogleMonitoringService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#delete GoogleMonitoringService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#update GoogleMonitoringService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#create GoogleMonitoringService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#delete GoogleMonitoringService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_service#update GoogleMonitoringService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringServiceBasicServiceOutputReference <a name="GoogleMonitoringServiceBasicServiceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceBasicServiceOutputReference;

new GoogleMonitoringServiceBasicServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resetServiceLabels">resetServiceLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceLabels` <a name="resetServiceLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resetServiceLabels"></a>

```java
public void resetServiceLabels()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.resetServiceType"></a>

```java
public void resetServiceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceLabelsInput">serviceLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceLabels">serviceLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceLabelsInput`<sup>Optional</sup> <a name="serviceLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `serviceLabels`<sup>Required</sup> <a name="serviceLabels" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicServiceOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringServiceBasicService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceBasicService">GoogleMonitoringServiceBasicService</a>

---


### GoogleMonitoringServiceTelemetryList <a name="GoogleMonitoringServiceTelemetryList" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceTelemetryList;

new GoogleMonitoringServiceTelemetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.get"></a>

```java
public GoogleMonitoringServiceTelemetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMonitoringServiceTelemetryOutputReference <a name="GoogleMonitoringServiceTelemetryOutputReference" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceTelemetryOutputReference;

new GoogleMonitoringServiceTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetry">GoogleMonitoringServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetryOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringServiceTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTelemetry">GoogleMonitoringServiceTelemetry</a>

---


### GoogleMonitoringServiceTimeoutsOutputReference <a name="GoogleMonitoringServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_service.GoogleMonitoringServiceTimeoutsOutputReference;

new GoogleMonitoringServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringService.GoogleMonitoringServiceTimeouts">GoogleMonitoringServiceTimeouts</a>

---



