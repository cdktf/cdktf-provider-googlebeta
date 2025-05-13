# `googleApiGatewayApiConfigIamBinding` Submodule <a name="`googleApiGatewayApiConfigIamBinding` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigIamBinding <a name="GoogleApiGatewayApiConfigIamBinding" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding google_api_gateway_api_config_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

new googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding(scope: Construct, id: string, config: GoogleApiGatewayApiConfigIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig">GoogleApiGatewayApiConfigIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig">GoogleApiGatewayApiConfigIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleApiGatewayApiConfigIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApiGatewayApiConfigIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isConstruct"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformElement"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformResource"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApiGatewayApiConfigIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApiGatewayApiConfigIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApiGatewayApiConfigIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayApiConfigIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference">GoogleApiGatewayApiConfigIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiConfigInput">apiConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiConfig">apiConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleApiGatewayApiConfigIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference">GoogleApiGatewayApiConfigIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiConfigInput"></a>

```typescript
public readonly apiConfigInput: string;
```

- *Type:* string

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleApiGatewayApiConfigIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigIamBindingCondition <a name="GoogleApiGatewayApiConfigIamBindingCondition" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.Initializer"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

const googleApiGatewayApiConfigIamBindingCondition: googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#expression GoogleApiGatewayApiConfigIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#title GoogleApiGatewayApiConfigIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#description GoogleApiGatewayApiConfigIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#expression GoogleApiGatewayApiConfigIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#title GoogleApiGatewayApiConfigIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#description GoogleApiGatewayApiConfigIamBinding#description}.

---

### GoogleApiGatewayApiConfigIamBindingConfig <a name="GoogleApiGatewayApiConfigIamBindingConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.Initializer"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

const googleApiGatewayApiConfigIamBindingConfig: googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.api">api</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#api GoogleApiGatewayApiConfigIamBinding#api}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.apiConfig">apiConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#api_config GoogleApiGatewayApiConfigIamBinding#api_config}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#members GoogleApiGatewayApiConfigIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#role GoogleApiGatewayApiConfigIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#id GoogleApiGatewayApiConfigIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#project GoogleApiGatewayApiConfigIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#api GoogleApiGatewayApiConfigIamBinding#api}.

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#api_config GoogleApiGatewayApiConfigIamBinding#api_config}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#members GoogleApiGatewayApiConfigIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#role GoogleApiGatewayApiConfigIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleApiGatewayApiConfigIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#condition GoogleApiGatewayApiConfigIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#id GoogleApiGatewayApiConfigIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.1/docs/resources/google_api_gateway_api_config_iam_binding#project GoogleApiGatewayApiConfigIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayApiConfigIamBindingConditionOutputReference <a name="GoogleApiGatewayApiConfigIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleApiGatewayApiConfigIamBinding } from '@cdktf/provider-google-beta'

new googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApiGatewayApiConfigIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamBinding.GoogleApiGatewayApiConfigIamBindingCondition">GoogleApiGatewayApiConfigIamBindingCondition</a>

---



