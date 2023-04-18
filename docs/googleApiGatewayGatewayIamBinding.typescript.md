# `google_api_gateway_gateway_iam_binding`

Refer to the Terraform Registory for docs: [`google_api_gateway_gateway_iam_binding`](https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding).

# `googleApiGatewayGatewayIamBinding` Submodule <a name="`googleApiGatewayGatewayIamBinding` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayGatewayIamBinding <a name="GoogleApiGatewayGatewayIamBinding" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding google_api_gateway_gateway_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

new googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding(scope: Construct, id: string, config: GoogleApiGatewayGatewayIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig">GoogleApiGatewayGatewayIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig">GoogleApiGatewayGatewayIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleApiGatewayGatewayIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isConstruct"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformElement"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformResource"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference">GoogleApiGatewayGatewayIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleApiGatewayGatewayIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference">GoogleApiGatewayGatewayIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleApiGatewayGatewayIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayGatewayIamBindingCondition <a name="GoogleApiGatewayGatewayIamBindingCondition" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.Initializer"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

const googleApiGatewayGatewayIamBindingCondition: googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#expression GoogleApiGatewayGatewayIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#title GoogleApiGatewayGatewayIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#description GoogleApiGatewayGatewayIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#expression GoogleApiGatewayGatewayIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#title GoogleApiGatewayGatewayIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#description GoogleApiGatewayGatewayIamBinding#description}.

---

### GoogleApiGatewayGatewayIamBindingConfig <a name="GoogleApiGatewayGatewayIamBindingConfig" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.Initializer"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

const googleApiGatewayGatewayIamBindingConfig: googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.gateway">gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#gateway GoogleApiGatewayGatewayIamBinding#gateway}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#members GoogleApiGatewayGatewayIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#role GoogleApiGatewayGatewayIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#id GoogleApiGatewayGatewayIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#project GoogleApiGatewayGatewayIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#region GoogleApiGatewayGatewayIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#gateway GoogleApiGatewayGatewayIamBinding#gateway}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#members GoogleApiGatewayGatewayIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#role GoogleApiGatewayGatewayIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleApiGatewayGatewayIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#condition GoogleApiGatewayGatewayIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#id GoogleApiGatewayGatewayIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#project GoogleApiGatewayGatewayIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_gateway_iam_binding#region GoogleApiGatewayGatewayIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayGatewayIamBindingConditionOutputReference <a name="GoogleApiGatewayGatewayIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleApiGatewayGatewayIamBinding } from '@cdktf/provider-google-beta'

new googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApiGatewayGatewayIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayGatewayIamBinding.GoogleApiGatewayGatewayIamBindingCondition">GoogleApiGatewayGatewayIamBindingCondition</a>

---



