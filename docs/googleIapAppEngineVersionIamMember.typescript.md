# `googleIapAppEngineVersionIamMember` Submodule <a name="`googleIapAppEngineVersionIamMember` Submodule" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAppEngineVersionIamMember <a name="GoogleIapAppEngineVersionIamMember" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member google_iap_app_engine_version_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

new googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember(scope: Construct, id: string, config: GoogleIapAppEngineVersionIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig">GoogleIapAppEngineVersionIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig">GoogleIapAppEngineVersionIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleIapAppEngineVersionIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapAppEngineVersionIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isConstruct"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformElement"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformResource"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIapAppEngineVersionIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapAppEngineVersionIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapAppEngineVersionIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapAppEngineVersionIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference">GoogleIapAppEngineVersionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleIapAppEngineVersionIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference">GoogleIapAppEngineVersionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIapAppEngineVersionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAppEngineVersionIamMemberCondition <a name="GoogleIapAppEngineVersionIamMemberCondition" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.Initializer"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

const googleIapAppEngineVersionIamMemberCondition: googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#expression GoogleIapAppEngineVersionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#title GoogleIapAppEngineVersionIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#description GoogleIapAppEngineVersionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#expression GoogleIapAppEngineVersionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#title GoogleIapAppEngineVersionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#description GoogleIapAppEngineVersionIamMember#description}.

---

### GoogleIapAppEngineVersionIamMemberConfig <a name="GoogleIapAppEngineVersionIamMemberConfig" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.Initializer"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

const googleIapAppEngineVersionIamMemberConfig: googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#app_id GoogleIapAppEngineVersionIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#member GoogleIapAppEngineVersionIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#role GoogleIapAppEngineVersionIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#service GoogleIapAppEngineVersionIamMember#service}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#version_id GoogleIapAppEngineVersionIamMember#version_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#id GoogleIapAppEngineVersionIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#project GoogleIapAppEngineVersionIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#app_id GoogleIapAppEngineVersionIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#member GoogleIapAppEngineVersionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#role GoogleIapAppEngineVersionIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#service GoogleIapAppEngineVersionIamMember#service}.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#version_id GoogleIapAppEngineVersionIamMember#version_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIapAppEngineVersionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#condition GoogleIapAppEngineVersionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#id GoogleIapAppEngineVersionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_app_engine_version_iam_member#project GoogleIapAppEngineVersionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAppEngineVersionIamMemberConditionOutputReference <a name="GoogleIapAppEngineVersionIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleIapAppEngineVersionIamMember } from '@cdktf/provider-google-beta'

new googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapAppEngineVersionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapAppEngineVersionIamMember.GoogleIapAppEngineVersionIamMemberCondition">GoogleIapAppEngineVersionIamMemberCondition</a>

---



