# `google_logging_billing_account_exclusion`

Refer to the Terraform Registory for docs: [`google_logging_billing_account_exclusion`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion).

# `googleLoggingBillingAccountExclusion` Submodule <a name="`googleLoggingBillingAccountExclusion` Submodule" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingBillingAccountExclusion <a name="GoogleLoggingBillingAccountExclusion" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion google_logging_billing_account_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer"></a>

```typescript
import { googleLoggingBillingAccountExclusion } from '@cdktf/provider-google-beta'

new googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion(scope: Construct, id: string, config: GoogleLoggingBillingAccountExclusionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig">GoogleLoggingBillingAccountExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig">GoogleLoggingBillingAccountExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct"></a>

```typescript
import { googleLoggingBillingAccountExclusion } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement"></a>

```typescript
import { googleLoggingBillingAccountExclusion } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource"></a>

```typescript
import { googleLoggingBillingAccountExclusion } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingBillingAccountExclusionConfig <a name="GoogleLoggingBillingAccountExclusionConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.Initializer"></a>

```typescript
import { googleLoggingBillingAccountExclusion } from '@cdktf/provider-google-beta'

const googleLoggingBillingAccountExclusionConfig: googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#billing_account GoogleLoggingBillingAccountExclusion#billing_account}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.name">name</a></code> | <code>string</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#id GoogleLoggingBillingAccountExclusion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#billing_account GoogleLoggingBillingAccountExclusion#billing_account}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#filter GoogleLoggingBillingAccountExclusion#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#name GoogleLoggingBillingAccountExclusion#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#description GoogleLoggingBillingAccountExclusion#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#disabled GoogleLoggingBillingAccountExclusion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountExclusion.GoogleLoggingBillingAccountExclusionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/resources/google_logging_billing_account_exclusion#id GoogleLoggingBillingAccountExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



