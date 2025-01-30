# `googleServiceUsageConsumerQuotaOverride` Submodule <a name="`googleServiceUsageConsumerQuotaOverride` Submodule" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceUsageConsumerQuotaOverride <a name="GoogleServiceUsageConsumerQuotaOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverride;

GoogleServiceUsageConsumerQuotaOverride.Builder.create(Construct scope, java.lang.String id)
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
    .limit(java.lang.String)
    .metric(java.lang.String)
    .overrideValue(java.lang.String)
    .service(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleServiceUsageConsumerQuotaOverrideTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.limit">limit</a></code> | <code>java.lang.String</code> | The limit on the metric, e.g. '/project/region'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.metric">metric</a></code> | <code>java.lang.String</code> | The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.overrideValue">overrideValue</a></code> | <code>java.lang.String</code> | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service that the metrics belong to, e.g. 'compute.googleapis.com'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the new quota would decrease the existing quota by more than 10%, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.limit"></a>

- *Type:* java.lang.String

The limit on the metric, e.g. '/project/region'.

~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
E.g. use '/project/user' instead of '1/{project}/{user}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.metric"></a>

- *Type:* java.lang.String

The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}

---

##### `overrideValue`<sup>Required</sup> <a name="overrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.overrideValue"></a>

- *Type:* java.lang.String

The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service that the metrics belong to, e.g. 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.dimensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the new quota would decrease the existing quota by more than 10%, the request is rejected.

If 'force' is 'true', that safety check is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts"></a>

```java
public void putTimeouts(GoogleServiceUsageConsumerQuotaOverrideTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce"></a>

```java
public void resetForce()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverride;

GoogleServiceUsageConsumerQuotaOverride.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverride;

GoogleServiceUsageConsumerQuotaOverride.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverride;

GoogleServiceUsageConsumerQuotaOverride.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverride;

GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleServiceUsageConsumerQuotaOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleServiceUsageConsumerQuotaOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceUsageConsumerQuotaOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput">limitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput">overrideValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit">limit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue">overrideValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts"></a>

```java
public GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput"></a>

```java
public java.lang.Object getForceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput"></a>

```java
public java.lang.String getLimitInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `overrideValueInput`<sup>Optional</sup> <a name="overrideValueInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput"></a>

```java
public java.lang.String getOverrideValueInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `overrideValue`<sup>Required</sup> <a name="overrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue"></a>

```java
public java.lang.String getOverrideValue();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceUsageConsumerQuotaOverrideConfig <a name="GoogleServiceUsageConsumerQuotaOverrideConfig" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverrideConfig;

GoogleServiceUsageConsumerQuotaOverrideConfig.builder()
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
    .limit(java.lang.String)
    .metric(java.lang.String)
    .overrideValue(java.lang.String)
    .service(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleServiceUsageConsumerQuotaOverrideTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit">limit</a></code> | <code>java.lang.String</code> | The limit on the metric, e.g. '/project/region'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric">metric</a></code> | <code>java.lang.String</code> | The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue">overrideValue</a></code> | <code>java.lang.String</code> | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service that the metrics belong to, e.g. 'compute.googleapis.com'. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the new quota would decrease the existing quota by more than 10%, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

The limit on the metric, e.g. '/project/region'.

~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
E.g. use '/project/user' instead of '1/{project}/{user}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}

---

##### `overrideValue`<sup>Required</sup> <a name="overrideValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue"></a>

```java
public java.lang.String getOverrideValue();
```

- *Type:* java.lang.String

The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service that the metrics belong to, e.g. 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the new quota would decrease the existing quota by more than 10%, the request is rejected.

If 'force' is 'true', that safety check is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts"></a>

```java
public GoogleServiceUsageConsumerQuotaOverrideTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}

---

### GoogleServiceUsageConsumerQuotaOverrideTimeouts <a name="GoogleServiceUsageConsumerQuotaOverrideTimeouts" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverrideTimeouts;

GoogleServiceUsageConsumerQuotaOverrideTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference <a name="GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_service_usage_consumer_quota_override.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference;

new GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---



