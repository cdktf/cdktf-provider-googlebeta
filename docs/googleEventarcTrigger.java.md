# `googleEventarcTrigger` Submodule <a name="`googleEventarcTrigger` Submodule" id="@cdktf/provider-google-beta.googleEventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcTrigger <a name="GoogleEventarcTrigger" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTrigger;

GoogleEventarcTrigger.Builder.create(Construct scope, java.lang.String id)
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
    .destination(GoogleEventarcTriggerDestination)
    .location(java.lang.String)
    .matchingCriteria(IResolvable)
    .matchingCriteria(java.util.List<GoogleEventarcTriggerMatchingCriteria>)
    .name(java.lang.String)
//  .channel(java.lang.String)
//  .eventDataContentType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleEventarcTriggerTimeouts)
//  .transport(GoogleEventarcTriggerTransport)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.matchingCriteria">matchingCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>></code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.channel">channel</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.eventDataContentType">eventDataContentType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.matchingCriteria"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>>

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.channel"></a>

- *Type:* java.lang.String

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `eventDataContentType`<sup>Optional</sup> <a name="eventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.eventDataContentType"></a>

- *Type:* java.lang.String

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.transport"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria">putMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport">putTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType">resetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination"></a>

```java
public void putDestination(GoogleEventarcTriggerDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `putMatchingCriteria` <a name="putMatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria"></a>

```java
public void putMatchingCriteria(IResolvable OR java.util.List<GoogleEventarcTriggerMatchingCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts"></a>

```java
public void putTimeouts(GoogleEventarcTriggerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---

##### `putTransport` <a name="putTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport"></a>

```java
public void putTransport(GoogleEventarcTriggerTransport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetEventDataContentType` <a name="resetEventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType"></a>

```java
public void resetEventDataContentType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransport` <a name="resetTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport"></a>

```java
public void resetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTrigger;

GoogleEventarcTrigger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTrigger;

GoogleEventarcTrigger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTrigger;

GoogleEventarcTrigger.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTrigger;

GoogleEventarcTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleEventarcTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleEventarcTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleEventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria">matchingCriteria</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput">eventDataContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput">matchingCriteriaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput">transportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType">eventDataContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions"></a>

```java
public StringMap getConditions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination"></a>

```java
public GoogleEventarcTriggerDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria"></a>

```java
public GoogleEventarcTriggerMatchingCriteriaList getMatchingCriteria();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts"></a>

```java
public GoogleEventarcTriggerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a>

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport"></a>

```java
public GoogleEventarcTriggerTransportOutputReference getTransport();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput"></a>

```java
public GoogleEventarcTriggerDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `eventDataContentTypeInput`<sup>Optional</sup> <a name="eventDataContentTypeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput"></a>

```java
public java.lang.String getEventDataContentTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `matchingCriteriaInput`<sup>Optional</sup> <a name="matchingCriteriaInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput"></a>

```java
public java.lang.Object getMatchingCriteriaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput"></a>

```java
public GoogleEventarcTriggerTransport getTransportInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `eventDataContentType`<sup>Required</sup> <a name="eventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType"></a>

```java
public java.lang.String getEventDataContentType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcTriggerConfig <a name="GoogleEventarcTriggerConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerConfig;

GoogleEventarcTriggerConfig.builder()
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
    .destination(GoogleEventarcTriggerDestination)
    .location(java.lang.String)
    .matchingCriteria(IResolvable)
    .matchingCriteria(java.util.List<GoogleEventarcTriggerMatchingCriteria>)
    .name(java.lang.String)
//  .channel(java.lang.String)
//  .eventDataContentType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleEventarcTriggerTimeouts)
//  .transport(GoogleEventarcTriggerTransport)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria">matchingCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>></code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel">channel</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType">eventDataContentType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination"></a>

```java
public GoogleEventarcTriggerDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria"></a>

```java
public java.lang.Object getMatchingCriteria();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>>

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `eventDataContentType`<sup>Optional</sup> <a name="eventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType"></a>

```java
public java.lang.String getEventDataContentType();
```

- *Type:* java.lang.String

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts"></a>

```java
public GoogleEventarcTriggerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport"></a>

```java
public GoogleEventarcTriggerTransport getTransport();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

### GoogleEventarcTriggerDestination <a name="GoogleEventarcTriggerDestination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestination;

GoogleEventarcTriggerDestination.builder()
//  .cloudRunService(GoogleEventarcTriggerDestinationCloudRunService)
//  .gke(GoogleEventarcTriggerDestinationGke)
//  .httpEndpoint(GoogleEventarcTriggerDestinationHttpEndpoint)
//  .networkConfig(GoogleEventarcTriggerDestinationNetworkConfig)
//  .workflow(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService">cloudRunService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow">workflow</a></code> | <code>java.lang.String</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `cloudRunService`<sup>Optional</sup> <a name="cloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService"></a>

```java
public GoogleEventarcTriggerDestinationCloudRunService getCloudRunService();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#cloud_run_service GoogleEventarcTrigger#cloud_run_service}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke"></a>

```java
public GoogleEventarcTriggerDestinationGke getGke();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#gke GoogleEventarcTrigger#gke}

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint"></a>

```java
public GoogleEventarcTriggerDestinationHttpEndpoint getHttpEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#http_endpoint GoogleEventarcTrigger#http_endpoint}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig"></a>

```java
public GoogleEventarcTriggerDestinationNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#network_config GoogleEventarcTrigger#network_config}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow"></a>

```java
public java.lang.String getWorkflow();
```

- *Type:* java.lang.String

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#workflow GoogleEventarcTrigger#workflow}

---

### GoogleEventarcTriggerDestinationCloudRunService <a name="GoogleEventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationCloudRunService;

GoogleEventarcTriggerDestinationCloudRunService.builder()
    .service(java.lang.String)
//  .path(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service">service</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path">path</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region">region</a></code> | <code>java.lang.String</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#region GoogleEventarcTrigger#region}

---

### GoogleEventarcTriggerDestinationGke <a name="GoogleEventarcTriggerDestinationGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationGke;

GoogleEventarcTriggerDestinationGke.builder()
    .cluster(java.lang.String)
    .location(java.lang.String)
    .namespace(java.lang.String)
    .service(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location">location</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service">service</a></code> | <code>java.lang.String</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path">path</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#cluster GoogleEventarcTrigger#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#namespace GoogleEventarcTrigger#namespace}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

### GoogleEventarcTriggerDestinationHttpEndpoint <a name="GoogleEventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationHttpEndpoint;

GoogleEventarcTriggerDestinationHttpEndpoint.builder()
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri">uri</a></code> | <code>java.lang.String</code> | Required. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#uri GoogleEventarcTrigger#uri}

---

### GoogleEventarcTriggerDestinationNetworkConfig <a name="GoogleEventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationNetworkConfig;

GoogleEventarcTriggerDestinationNetworkConfig.builder()
    .networkAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#network_attachment GoogleEventarcTrigger#network_attachment}

---

### GoogleEventarcTriggerMatchingCriteria <a name="GoogleEventarcTriggerMatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerMatchingCriteria;

GoogleEventarcTriggerMatchingCriteria.builder()
    .attribute(java.lang.String)
    .value(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value">value</a></code> | <code>java.lang.String</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator">operator</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#attribute GoogleEventarcTrigger#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#value GoogleEventarcTrigger#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#operator GoogleEventarcTrigger#operator}

---

### GoogleEventarcTriggerTimeouts <a name="GoogleEventarcTriggerTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTimeouts;

GoogleEventarcTriggerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}.

---

### GoogleEventarcTriggerTransport <a name="GoogleEventarcTriggerTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTransport;

GoogleEventarcTriggerTransport.builder()
//  .pubsub(GoogleEventarcTriggerTransportPubsub)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub"></a>

```java
public GoogleEventarcTriggerTransportPubsub getPubsub();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#pubsub GoogleEventarcTrigger#pubsub}

---

### GoogleEventarcTriggerTransportPubsub <a name="GoogleEventarcTriggerTransportPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTransportPubsub;

GoogleEventarcTriggerTransportPubsub.builder()
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic">topic</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_eventarc_trigger#topic GoogleEventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcTriggerDestinationCloudRunServiceOutputReference <a name="GoogleEventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference;

new GoogleEventarcTriggerDestinationCloudRunServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerDestinationCloudRunService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---


### GoogleEventarcTriggerDestinationGkeOutputReference <a name="GoogleEventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationGkeOutputReference;

new GoogleEventarcTriggerDestinationGkeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerDestinationGke getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---


### GoogleEventarcTriggerDestinationHttpEndpointOutputReference <a name="GoogleEventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference;

new GoogleEventarcTriggerDestinationHttpEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerDestinationHttpEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---


### GoogleEventarcTriggerDestinationNetworkConfigOutputReference <a name="GoogleEventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference;

new GoogleEventarcTriggerDestinationNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerDestinationNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---


### GoogleEventarcTriggerDestinationOutputReference <a name="GoogleEventarcTriggerDestinationOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerDestinationOutputReference;

new GoogleEventarcTriggerDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService">putCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint">putHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService">resetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudRunService` <a name="putCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```java
public void putCloudRunService(GoogleEventarcTriggerDestinationCloudRunService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `putGke` <a name="putGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke"></a>

```java
public void putGke(GoogleEventarcTriggerDestinationGke value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `putHttpEndpoint` <a name="putHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```java
public void putHttpEndpoint(GoogleEventarcTriggerDestinationHttpEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleEventarcTriggerDestinationNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `resetCloudRunService` <a name="resetCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```java
public void resetCloudRunService()
```

##### `resetGke` <a name="resetGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke"></a>

```java
public void resetGke()
```

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```java
public void resetHttpEndpoint()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```java
public void resetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction">cloudFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService">cloudRunService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">cloudRunServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput">workflowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow">workflow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```java
public java.lang.String getCloudFunction();
```

- *Type:* java.lang.String

---

##### `cloudRunService`<sup>Required</sup> <a name="cloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```java
public GoogleEventarcTriggerDestinationCloudRunServiceOutputReference getCloudRunService();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke"></a>

```java
public GoogleEventarcTriggerDestinationGkeOutputReference getGke();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a>

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```java
public GoogleEventarcTriggerDestinationHttpEndpointOutputReference getHttpEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```java
public GoogleEventarcTriggerDestinationNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `cloudRunServiceInput`<sup>Optional</sup> <a name="cloudRunServiceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```java
public GoogleEventarcTriggerDestinationCloudRunService getCloudRunServiceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```java
public GoogleEventarcTriggerDestinationGke getGkeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```java
public GoogleEventarcTriggerDestinationHttpEndpoint getHttpEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```java
public GoogleEventarcTriggerDestinationNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```java
public java.lang.String getWorkflowInput();
```

- *Type:* java.lang.String

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow"></a>

```java
public java.lang.String getWorkflow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---


### GoogleEventarcTriggerMatchingCriteriaList <a name="GoogleEventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerMatchingCriteriaList;

new GoogleEventarcTriggerMatchingCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get"></a>

```java
public GoogleEventarcTriggerMatchingCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>>

---


### GoogleEventarcTriggerMatchingCriteriaOutputReference <a name="GoogleEventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerMatchingCriteriaOutputReference;

new GoogleEventarcTriggerMatchingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>

---


### GoogleEventarcTriggerTimeoutsOutputReference <a name="GoogleEventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTimeoutsOutputReference;

new GoogleEventarcTriggerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---


### GoogleEventarcTriggerTransportOutputReference <a name="GoogleEventarcTriggerTransportOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTransportOutputReference;

new GoogleEventarcTriggerTransportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub">putPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub">resetPubsub</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsub` <a name="putPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub"></a>

```java
public void putPubsub(GoogleEventarcTriggerTransportPubsub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `resetPubsub` <a name="resetPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub"></a>

```java
public void resetPubsub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput">pubsubInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsub`<sup>Required</sup> <a name="pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub"></a>

```java
public GoogleEventarcTriggerTransportPubsubOutputReference getPubsub();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a>

---

##### `pubsubInput`<sup>Optional</sup> <a name="pubsubInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```java
public GoogleEventarcTriggerTransportPubsub getPubsubInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerTransport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---


### GoogleEventarcTriggerTransportPubsubOutputReference <a name="GoogleEventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_eventarc_trigger.GoogleEventarcTriggerTransportPubsubOutputReference;

new GoogleEventarcTriggerTransportPubsubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```java
public void resetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription">subscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```java
public GoogleEventarcTriggerTransportPubsub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---



