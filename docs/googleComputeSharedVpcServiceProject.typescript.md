# `google_compute_shared_vpc_service_project`

Refer to the Terraform Registory for docs: [`google_compute_shared_vpc_service_project`](https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project).

# `googleComputeSharedVpcServiceProject` Submodule <a name="`googleComputeSharedVpcServiceProject` Submodule" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSharedVpcServiceProject <a name="GoogleComputeSharedVpcServiceProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project google_compute_shared_vpc_service_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

new googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject(scope: Construct, id: string, config: GoogleComputeSharedVpcServiceProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig">GoogleComputeSharedVpcServiceProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig">GoogleComputeSharedVpcServiceProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeSharedVpcServiceProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference">GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProjectInput">hostProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProjectInput">serviceProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProject">hostProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProject">serviceProject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference">GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `hostProjectInput`<sup>Optional</sup> <a name="hostProjectInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProjectInput"></a>

```typescript
public readonly hostProjectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceProjectInput`<sup>Optional</sup> <a name="serviceProjectInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProjectInput"></a>

```typescript
public readonly serviceProjectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeSharedVpcServiceProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `hostProject`<sup>Required</sup> <a name="hostProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.hostProject"></a>

```typescript
public readonly hostProject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceProject`<sup>Required</sup> <a name="serviceProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.serviceProject"></a>

```typescript
public readonly serviceProject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSharedVpcServiceProjectConfig <a name="GoogleComputeSharedVpcServiceProjectConfig" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.Initializer"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

const googleComputeSharedVpcServiceProjectConfig: googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.hostProject">hostProject</a></code> | <code>string</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.serviceProject">serviceProject</a></code> | <code>string</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostProject`<sup>Required</sup> <a name="hostProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.hostProject"></a>

```typescript
public readonly hostProject: string;
```

- *Type:* string

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#host_project GoogleComputeSharedVpcServiceProject#host_project}

---

##### `serviceProject`<sup>Required</sup> <a name="serviceProject" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.serviceProject"></a>

```typescript
public readonly serviceProject: string;
```

- *Type:* string

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#service_project GoogleComputeSharedVpcServiceProject#service_project}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#deletion_policy GoogleComputeSharedVpcServiceProject#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSharedVpcServiceProjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#timeouts GoogleComputeSharedVpcServiceProject#timeouts}

---

### GoogleComputeSharedVpcServiceProjectTimeouts <a name="GoogleComputeSharedVpcServiceProjectTimeouts" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.Initializer"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

const googleComputeSharedVpcServiceProjectTimeouts: googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference <a name="GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeSharedVpcServiceProject } from '@cdktf/provider-google-beta'

new googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSharedVpcServiceProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSharedVpcServiceProject.GoogleComputeSharedVpcServiceProjectTimeouts">GoogleComputeSharedVpcServiceProjectTimeouts</a>

---



