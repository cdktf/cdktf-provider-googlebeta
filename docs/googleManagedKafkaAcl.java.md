# `googleManagedKafkaAcl` Submodule <a name="`googleManagedKafkaAcl` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAcl <a name="GoogleManagedKafkaAcl" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl google_managed_kafka_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAcl;

GoogleManagedKafkaAcl.Builder.create(Construct scope, java.lang.String id)
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
    .aclEntries(IResolvable)
    .aclEntries(java.util.List<GoogleManagedKafkaAclAclEntries>)
    .aclId(java.lang.String)
    .cluster(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaAclTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.aclEntries">aclEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>></code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.aclId">aclId</a></code> | <code>java.lang.String</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclEntries`<sup>Required</sup> <a name="aclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.aclEntries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>>

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#acl_entries GoogleManagedKafkaAcl#acl_entries}

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.aclId"></a>

- *Type:* java.lang.String

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#acl_id GoogleManagedKafkaAcl#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#cluster GoogleManagedKafkaAcl#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#location GoogleManagedKafkaAcl#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#timeouts GoogleManagedKafkaAcl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries">putAclEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAclEntries` <a name="putAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries"></a>

```java
public void putAclEntries(IResolvable OR java.util.List<GoogleManagedKafkaAclAclEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts"></a>

```java
public void putTimeouts(GoogleManagedKafkaAclTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAcl;

GoogleManagedKafkaAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAcl;

GoogleManagedKafkaAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAcl;

GoogleManagedKafkaAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAcl;

GoogleManagedKafkaAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleManagedKafkaAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleManagedKafkaAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleManagedKafkaAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries">aclEntries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput">aclEntriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput">aclIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId">aclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclEntries`<sup>Required</sup> <a name="aclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries"></a>

```java
public GoogleManagedKafkaAclAclEntriesList getAclEntries();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts"></a>

```java
public GoogleManagedKafkaAclTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a>

---

##### `aclEntriesInput`<sup>Optional</sup> <a name="aclEntriesInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput"></a>

```java
public java.lang.Object getAclEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>>

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput"></a>

```java
public java.lang.String getAclIdInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId"></a>

```java
public java.lang.String getAclId();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclAclEntries <a name="GoogleManagedKafkaAclAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclAclEntries;

GoogleManagedKafkaAclAclEntries.builder()
    .operation(java.lang.String)
    .principal(java.lang.String)
//  .host(java.lang.String)
//  .permissionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation">operation</a></code> | <code>java.lang.String</code> | The operation type. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal">principal</a></code> | <code>java.lang.String</code> | The principal. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host">host</a></code> | <code>java.lang.String</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#operation GoogleManagedKafkaAcl#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

The principal.

Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#principal GoogleManagedKafkaAcl#principal}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#host GoogleManagedKafkaAcl#host}

---

##### `permissionType`<sup>Optional</sup> <a name="permissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#permission_type GoogleManagedKafkaAcl#permission_type}

---

### GoogleManagedKafkaAclConfig <a name="GoogleManagedKafkaAclConfig" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclConfig;

GoogleManagedKafkaAclConfig.builder()
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
    .aclEntries(IResolvable)
    .aclEntries(java.util.List<GoogleManagedKafkaAclAclEntries>)
    .aclId(java.lang.String)
    .cluster(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleManagedKafkaAclTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries">aclEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>></code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId">aclId</a></code> | <code>java.lang.String</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclEntries`<sup>Required</sup> <a name="aclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries"></a>

```java
public java.lang.Object getAclEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>>

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#acl_entries GoogleManagedKafkaAcl#acl_entries}

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId"></a>

```java
public java.lang.String getAclId();
```

- *Type:* java.lang.String

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#acl_id GoogleManagedKafkaAcl#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#cluster GoogleManagedKafkaAcl#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#location GoogleManagedKafkaAcl#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts"></a>

```java
public GoogleManagedKafkaAclTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#timeouts GoogleManagedKafkaAcl#timeouts}

---

### GoogleManagedKafkaAclTimeouts <a name="GoogleManagedKafkaAclTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclTimeouts;

GoogleManagedKafkaAclTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclAclEntriesList <a name="GoogleManagedKafkaAclAclEntriesList" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclAclEntriesList;

new GoogleManagedKafkaAclAclEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get"></a>

```java
public GoogleManagedKafkaAclAclEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>>

---


### GoogleManagedKafkaAclAclEntriesOutputReference <a name="GoogleManagedKafkaAclAclEntriesOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclAclEntriesOutputReference;

new GoogleManagedKafkaAclAclEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType">resetPermissionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPermissionType` <a name="resetPermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType"></a>

```java
public void resetPermissionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput">permissionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput"></a>

```java
public java.lang.String getPermissionTypeInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries">GoogleManagedKafkaAclAclEntries</a>

---


### GoogleManagedKafkaAclTimeoutsOutputReference <a name="GoogleManagedKafkaAclTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_managed_kafka_acl.GoogleManagedKafkaAclTimeoutsOutputReference;

new GoogleManagedKafkaAclTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

---



