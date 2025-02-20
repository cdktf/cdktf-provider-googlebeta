# `googleOrganizationPolicy` Submodule <a name="`googleOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationPolicy <a name="GoogleOrganizationPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy google_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicy(scope: Construct, id: string, config: GoogleOrganizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig">GoogleOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig">GoogleOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy"></a>

```typescript
public putBooleanPolicy(value: GoogleOrganizationPolicyBooleanPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy"></a>

```typescript
public putListPolicy(value: GoogleOrganizationPolicyListPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy"></a>

```typescript
public putRestorePolicy(value: GoogleOrganizationPolicyRestorePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOrganizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetBooleanPolicy"></a>

```typescript
public resetBooleanPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetListPolicy"></a>

```typescript
public resetListPolicy(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference">GoogleOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference">GoogleOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference">GoogleOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference">GoogleOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: GoogleOrganizationPolicyBooleanPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference">GoogleOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicy"></a>

```typescript
public readonly listPolicy: GoogleOrganizationPolicyListPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference">GoogleOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: GoogleOrganizationPolicyRestorePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference">GoogleOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrganizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference">GoogleOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicyInput"></a>

```typescript
public readonly booleanPolicyInput: GoogleOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicyInput"></a>

```typescript
public readonly listPolicyInput: GoogleOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: GoogleOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOrganizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationPolicyBooleanPolicy <a name="GoogleOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyBooleanPolicy: googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#enforced GoogleOrganizationPolicy#enforced}

---

### GoogleOrganizationPolicyConfig <a name="GoogleOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyConfig: googleOrganizationPolicy.GoogleOrganizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.version">version</a></code> | <code>number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#constraint GoogleOrganizationPolicy#constraint}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}.

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: GoogleOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#boolean_policy GoogleOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.listPolicy"></a>

```typescript
public readonly listPolicy: GoogleOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#list_policy GoogleOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: GoogleOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#restore_policy GoogleOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOrganizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#timeouts GoogleOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#version GoogleOrganizationPolicy#version}

---

### GoogleOrganizationPolicyListPolicy <a name="GoogleOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyListPolicy: googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.allow"></a>

```typescript
public readonly allow: GoogleOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#allow GoogleOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.deny"></a>

```typescript
public readonly deny: GoogleOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#deny GoogleOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#inherit_from_parent GoogleOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#suggested_value GoogleOrganizationPolicy#suggested_value}

---

### GoogleOrganizationPolicyListPolicyAllow <a name="GoogleOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyListPolicyAllow: googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

### GoogleOrganizationPolicyListPolicyDeny <a name="GoogleOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyListPolicyDeny: googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

### GoogleOrganizationPolicyRestorePolicy <a name="GoogleOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyRestorePolicy: googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#default GoogleOrganizationPolicy#default}

---

### GoogleOrganizationPolicyTimeouts <a name="GoogleOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

const googleOrganizationPolicyTimeouts: googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#create GoogleOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#delete GoogleOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#read GoogleOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#update GoogleOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#create GoogleOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#delete GoogleOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#read GoogleOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_policy#update GoogleOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

---


### GoogleOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

---


### GoogleOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

---


### GoogleOrganizationPolicyListPolicyOutputReference <a name="GoogleOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```typescript
public putAllow(value: GoogleOrganizationPolicyListPolicyAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```typescript
public putDeny(value: GoogleOrganizationPolicyListPolicyDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```typescript
public resetSuggestedValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference">GoogleOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference">GoogleOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```typescript
public readonly allow: GoogleOrganizationPolicyListPolicyAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference">GoogleOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```typescript
public readonly deny: GoogleOrganizationPolicyListPolicyDenyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference">GoogleOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: GoogleOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```typescript
public readonly denyInput: GoogleOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```typescript
public readonly suggestedValueInput: string;
```

- *Type:* string

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

---


### GoogleOrganizationPolicyRestorePolicyOutputReference <a name="GoogleOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

---


### GoogleOrganizationPolicyTimeoutsOutputReference <a name="GoogleOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOrganizationPolicy } from '@cdktf/provider-google-beta'

new googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOrganizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

---



