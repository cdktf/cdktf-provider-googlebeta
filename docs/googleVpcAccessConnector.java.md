# `googleVpcAccessConnector` Submodule <a name="`googleVpcAccessConnector` Submodule" id="@cdktf/provider-google-beta.googleVpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVpcAccessConnector <a name="GoogleVpcAccessConnector" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnector;

GoogleVpcAccessConnector.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .machineType(java.lang.String)
//  .maxInstances(java.lang.Number)
//  .maxThroughput(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .minThroughput(java.lang.Number)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .subnet(GoogleVpcAccessConnectorSubnet)
//  .timeouts(GoogleVpcAccessConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#ip_cidr_range GoogleVpcAccessConnector#ip_cidr_range}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#machine_type GoogleVpcAccessConnector#machine_type}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxInstances"></a>

- *Type:* java.lang.Number

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#max_instances GoogleVpcAccessConnector#max_instances}

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxThroughput"></a>

- *Type:* java.lang.Number

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#max_throughput GoogleVpcAccessConnector#max_throughput}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minInstances"></a>

- *Type:* java.lang.Number

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#min_instances GoogleVpcAccessConnector#min_instances}

---

##### `minThroughput`<sup>Optional</sup> <a name="minThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minThroughput"></a>

- *Type:* java.lang.Number

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#min_throughput GoogleVpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#network GoogleVpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#region GoogleVpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#subnet GoogleVpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#timeouts GoogleVpcAccessConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinThroughput">resetMinThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet"></a>

```java
public void putSubnet(GoogleVpcAccessConnectorSubnet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts"></a>

```java
public void putTimeouts(GoogleVpcAccessConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxThroughput"></a>

```java
public void resetMaxThroughput()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetMinThroughput` <a name="resetMinThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinThroughput"></a>

```java
public void resetMinThroughput()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnector;

GoogleVpcAccessConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnector;

GoogleVpcAccessConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnector;

GoogleVpcAccessConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnector;

GoogleVpcAccessConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVpcAccessConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVpcAccessConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connectedProjects">connectedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference">GoogleVpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference">GoogleVpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughputInput">maxThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughputInput">minThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectedProjects`<sup>Required</sup> <a name="connectedProjects" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connectedProjects"></a>

```java
public java.util.List<java.lang.String> getConnectedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnet"></a>

```java
public GoogleVpcAccessConnectorSubnetOutputReference getSubnet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference">GoogleVpcAccessConnectorSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeouts"></a>

```java
public GoogleVpcAccessConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference">GoogleVpcAccessConnectorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughputInput"></a>

```java
public java.lang.Number getMaxThroughputInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minThroughputInput`<sup>Optional</sup> <a name="minThroughputInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughputInput"></a>

```java
public java.lang.Number getMinThroughputInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnetInput"></a>

```java
public GoogleVpcAccessConnectorSubnet getSubnetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `minThroughput`<sup>Required</sup> <a name="minThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughput"></a>

```java
public java.lang.Number getMinThroughput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVpcAccessConnectorConfig <a name="GoogleVpcAccessConnectorConfig" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnectorConfig;

GoogleVpcAccessConnectorConfig.builder()
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
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .machineType(java.lang.String)
//  .maxInstances(java.lang.Number)
//  .maxThroughput(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .minThroughput(java.lang.Number)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .subnet(GoogleVpcAccessConnectorSubnet)
//  .timeouts(GoogleVpcAccessConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minThroughput">minThroughput</a></code> | <code>java.lang.Number</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.network">network</a></code> | <code>java.lang.String</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#ip_cidr_range GoogleVpcAccessConnector#ip_cidr_range}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#machine_type GoogleVpcAccessConnector#machine_type}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#max_instances GoogleVpcAccessConnector#max_instances}

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#max_throughput GoogleVpcAccessConnector#max_throughput}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#min_instances GoogleVpcAccessConnector#min_instances}

---

##### `minThroughput`<sup>Optional</sup> <a name="minThroughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minThroughput"></a>

```java
public java.lang.Number getMinThroughput();
```

- *Type:* java.lang.Number

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#min_throughput GoogleVpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#network GoogleVpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#region GoogleVpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.subnet"></a>

```java
public GoogleVpcAccessConnectorSubnet getSubnet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#subnet GoogleVpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.timeouts"></a>

```java
public GoogleVpcAccessConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#timeouts GoogleVpcAccessConnector#timeouts}

---

### GoogleVpcAccessConnectorSubnet <a name="GoogleVpcAccessConnectorSubnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnectorSubnet;

GoogleVpcAccessConnectorSubnet.builder()
//  .name(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.name">name</a></code> | <code>java.lang.String</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project in which the subnet exists. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#project_id GoogleVpcAccessConnector#project_id}

---

### GoogleVpcAccessConnectorTimeouts <a name="GoogleVpcAccessConnectorTimeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnectorTimeouts;

GoogleVpcAccessConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#create GoogleVpcAccessConnector#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#delete GoogleVpcAccessConnector#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#create GoogleVpcAccessConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_vpc_access_connector#delete GoogleVpcAccessConnector#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVpcAccessConnectorSubnetOutputReference <a name="GoogleVpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnectorSubnetOutputReference;

new GoogleVpcAccessConnectorSubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```java
public GoogleVpcAccessConnectorSubnet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

---


### GoogleVpcAccessConnectorTimeoutsOutputReference <a name="GoogleVpcAccessConnectorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vpc_access_connector.GoogleVpcAccessConnectorTimeoutsOutputReference;

new GoogleVpcAccessConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

---



