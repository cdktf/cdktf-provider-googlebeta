# `google_org_policy_policy`

Refer to the Terraform Registory for docs: [`google_org_policy_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy).

# `googleOrgPolicyPolicy` Submodule <a name="`googleOrgPolicyPolicy` Submodule" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrgPolicyPolicy <a name="GoogleOrgPolicyPolicy" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicy(scope: Construct, id: string, config: GoogleOrgPolicyPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig">GoogleOrgPolicyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig">GoogleOrgPolicyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec"></a>

```typescript
public putSpec(value: GoogleOrgPolicyPolicySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOrgPolicyPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec"></a>

```typescript
public readonly spec: GoogleOrgPolicyPolicySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrgPolicyPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput"></a>

```typescript
public readonly specInput: GoogleOrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOrgPolicyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrgPolicyPolicyConfig <a name="GoogleOrgPolicyPolicyConfig" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicyConfig: googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name">name</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#name GoogleOrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#parent GoogleOrgPolicyPolicy#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec"></a>

```typescript
public readonly spec: GoogleOrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#spec GoogleOrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrgPolicyPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#timeouts GoogleOrgPolicyPolicy#timeouts}

---

### GoogleOrgPolicyPolicySpec <a name="GoogleOrgPolicyPolicySpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicySpec: googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines the inheritance behavior for this `Policy`. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]</code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines the inheritance behavior for this `Policy`.

If `inherit_from_parent` is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource.

This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleOrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

### GoogleOrgPolicyPolicySpecRules <a name="GoogleOrgPolicyPolicySpecRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicySpecRules: googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll">allowAll</a></code> | <code>string</code> | Setting this to true means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll">denyAll</a></code> | <code>string</code> | Setting this to true means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>string</code> | If `true`, then the `Policy` is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

Setting this to true means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#allow_all GoogleOrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition"></a>

```typescript
public readonly condition: GoogleOrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#condition GoogleOrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

Setting this to true means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#deny_all GoogleOrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

If `true`, then the `Policy` is enforced.

If `false`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#enforce GoogleOrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values"></a>

```typescript
public readonly values: GoogleOrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#values GoogleOrgPolicyPolicy#values}

---

### GoogleOrgPolicyPolicySpecRulesCondition <a name="GoogleOrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicySpecRulesCondition: googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

### GoogleOrgPolicyPolicySpecRulesValues <a name="GoogleOrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicySpecRulesValues: googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

### GoogleOrgPolicyPolicyTimeouts <a name="GoogleOrgPolicyPolicyTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

const googleOrgPolicyPolicyTimeouts: googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrgPolicyPolicySpecOutputReference <a name="GoogleOrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleOrgPolicyPolicySpecRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset"></a>

```typescript
public resetReset(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput">resetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules"></a>

```typescript
public readonly rules: GoogleOrgPolicyPolicySpecRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```typescript
public readonly resetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleOrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---


### GoogleOrgPolicyPolicySpecRulesConditionOutputReference <a name="GoogleOrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---


### GoogleOrgPolicyPolicySpecRulesList <a name="GoogleOrgPolicyPolicySpecRulesList" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get"></a>

```typescript
public get(index: number): GoogleOrgPolicyPolicySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>[]

---


### GoogleOrgPolicyPolicySpecRulesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```typescript
public putCondition(value: GoogleOrgPolicyPolicySpecRulesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```typescript
public putValues(value: GoogleOrgPolicyPolicySpecRulesValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```typescript
public resetDenyAll(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: GoogleOrgPolicyPolicySpecRulesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```typescript
public readonly values: GoogleOrgPolicyPolicySpecRulesValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleOrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```typescript
public readonly denyAllInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: GoogleOrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrgPolicyPolicySpecRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>

---


### GoogleOrgPolicyPolicySpecRulesValuesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```typescript
public resetDeniedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```typescript
public readonly deniedValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---


### GoogleOrgPolicyPolicyTimeoutsOutputReference <a name="GoogleOrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOrgPolicyPolicy } from '@cdktf/provider-google-beta'

new googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrgPolicyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

---



