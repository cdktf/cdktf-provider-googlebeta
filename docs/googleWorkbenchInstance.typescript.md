# `googleWorkbenchInstance` Submodule <a name="`googleWorkbenchInstance` Submodule" id="@cdktf/provider-google-beta.googleWorkbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkbenchInstance <a name="GoogleWorkbenchInstance" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstance(scope: Construct, id: string, config: GoogleWorkbenchInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig">GoogleWorkbenchInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig">GoogleWorkbenchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup">putGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess">resetDisableProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetEnableThirdPartyIdentity">resetEnableThirdPartyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup">resetGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGceSetup` <a name="putGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup"></a>

```typescript
public putGceSetup(value: GoogleWorkbenchInstanceGceSetup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleWorkbenchInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetDisableProxyAccess` <a name="resetDisableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess"></a>

```typescript
public resetDisableProxyAccess(): void
```

##### `resetEnableThirdPartyIdentity` <a name="resetEnableThirdPartyIdentity" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetEnableThirdPartyIdentity"></a>

```typescript
public resetEnableThirdPartyIdentity(): void
```

##### `resetGceSetup` <a name="resetGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup"></a>

```typescript
public resetGceSetup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners"></a>

```typescript
public resetInstanceOwners(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkbenchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState">healthState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri">proxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory">upgradeHistory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput">disableProxyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.enableThirdPartyIdentityInput">enableThirdPartyIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput">gceSetupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess">disableProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.enableThirdPartyIdentity">enableThirdPartyIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gceSetup`<sup>Required</sup> <a name="gceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup"></a>

```typescript
public readonly gceSetup: GoogleWorkbenchInstanceGceSetupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a>

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo"></a>

```typescript
public readonly healthInfo: GoogleWorkbenchInstanceHealthInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a>

---

##### `healthState`<sup>Required</sup> <a name="healthState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState"></a>

```typescript
public readonly healthState: string;
```

- *Type:* string

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri"></a>

```typescript
public readonly proxyUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkbenchInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `upgradeHistory`<sup>Required</sup> <a name="upgradeHistory" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory"></a>

```typescript
public readonly upgradeHistory: GoogleWorkbenchInstanceUpgradeHistoryList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `disableProxyAccessInput`<sup>Optional</sup> <a name="disableProxyAccessInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput"></a>

```typescript
public readonly disableProxyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableThirdPartyIdentityInput`<sup>Optional</sup> <a name="enableThirdPartyIdentityInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.enableThirdPartyIdentityInput"></a>

```typescript
public readonly enableThirdPartyIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gceSetupInput`<sup>Optional</sup> <a name="gceSetupInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput"></a>

```typescript
public readonly gceSetupInput: GoogleWorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput"></a>

```typescript
public readonly instanceOwnersInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleWorkbenchInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `disableProxyAccess`<sup>Required</sup> <a name="disableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess"></a>

```typescript
public readonly disableProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableThirdPartyIdentity`<sup>Required</sup> <a name="enableThirdPartyIdentity" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.enableThirdPartyIdentity"></a>

```typescript
public readonly enableThirdPartyIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkbenchInstanceConfig <a name="GoogleWorkbenchInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceConfig: googleWorkbenchInstance.GoogleWorkbenchInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess">disableProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.enableThirdPartyIdentity">enableThirdPartyIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag that specifies that a notebook can be accessed with third party identity provider. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#location GoogleWorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#desired_state GoogleWorkbenchInstance#desired_state}

---

##### `disableProxyAccess`<sup>Optional</sup> <a name="disableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess"></a>

```typescript
public readonly disableProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disable_proxy_access GoogleWorkbenchInstance#disable_proxy_access}

---

##### `enableThirdPartyIdentity`<sup>Optional</sup> <a name="enableThirdPartyIdentity" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.enableThirdPartyIdentity"></a>

```typescript
public readonly enableThirdPartyIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag that specifies that a notebook can be accessed with third party identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#enable_third_party_identity GoogleWorkbenchInstance#enable_third_party_identity}

---

##### `gceSetup`<sup>Optional</sup> <a name="gceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup"></a>

```typescript
public readonly gceSetup: GoogleWorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#gce_setup GoogleWorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#instance_id GoogleWorkbenchInstance#instance_id}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.
If specified, sets the access mode to 'Single user'. For more details, see
https://cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#instance_owners GoogleWorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#labels GoogleWorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkbenchInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#timeouts GoogleWorkbenchInstance#timeouts}

---

### GoogleWorkbenchInstanceGceSetup <a name="GoogleWorkbenchInstanceGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetup: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp">disablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType">machineType</a></code> | <code>string</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts">serviceAccounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags">tags</a></code> | <code>string[]</code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `acceleratorConfigs`<sup>Optional</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```typescript
public readonly acceleratorConfigs: IResolvable | GoogleWorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#accelerator_configs GoogleWorkbenchInstance#accelerator_configs}

---

##### `bootDisk`<sup>Optional</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk"></a>

```typescript
public readonly bootDisk: GoogleWorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#boot_disk GoogleWorkbenchInstance#boot_disk}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleWorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#container_image GoogleWorkbenchInstance#container_image}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks"></a>

```typescript
public readonly dataDisks: GoogleWorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#data_disks GoogleWorkbenchInstance#data_disks}

---

##### `disablePublicIp`<sup>Optional</sup> <a name="disablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```typescript
public readonly disablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disable_public_ip GoogleWorkbenchInstance#disable_public_ip}

---

##### `enableIpForwarding`<sup>Optional</sup> <a name="enableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#enable_ip_forwarding GoogleWorkbenchInstance#enable_ip_forwarding}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#machine_type GoogleWorkbenchInstance#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#metadata GoogleWorkbenchInstance#metadata}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#network_interfaces GoogleWorkbenchInstance#network_interfaces}

---

##### `serviceAccounts`<sup>Optional</sup> <a name="serviceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: IResolvable | GoogleWorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#service_accounts GoogleWorkbenchInstance#service_accounts}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#shielded_instance_config GoogleWorkbenchInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#tags GoogleWorkbenchInstance#tags}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage"></a>

```typescript
public readonly vmImage: GoogleWorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#vm_image GoogleWorkbenchInstance#vm_image}

---

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigs <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupAcceleratorConfigs: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">coreCount</a></code> | <code>string</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type">type</a></code> | <code>string</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```typescript
public readonly coreCount: string;
```

- *Type:* string

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#core_count GoogleWorkbenchInstance#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#type GoogleWorkbenchInstance#type}

---

### GoogleWorkbenchInstanceGceSetupBootDisk <a name="GoogleWorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupBootDisk: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType">diskType</a></code> | <code>string</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey">kmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupContainerImage <a name="GoogleWorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupContainerImage: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository">repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag">tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#repository GoogleWorkbenchInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#tag GoogleWorkbenchInstance#tag}

---

### GoogleWorkbenchInstanceGceSetupDataDisks <a name="GoogleWorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupDataDisks: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType">diskType</a></code> | <code>string</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey">kmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfaces <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupNetworkInterfaces: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs">accessConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network">network</a></code> | <code>string</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">nicType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">subnet</a></code> | <code>string</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#access_configs GoogleWorkbenchInstance#access_configs}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#network GoogleWorkbenchInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#nic_type GoogleWorkbenchInstance#nic_type}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#subnet GoogleWorkbenchInstance#subnet}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp">externalIp</a></code> | <code>string</code> | An external IP address associated with this instance. |

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

An external IP address associated with this instance.

Specify an unused
static external IP address available to the project or leave this field
undefined to use an IP from a shared ephemeral IP address pool. If you
specify a static external IP address, it must live in the same region as
the zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#external_ip GoogleWorkbenchInstance#external_ip}

---

### GoogleWorkbenchInstanceGceSetupServiceAccounts <a name="GoogleWorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupServiceAccounts: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email">email</a></code> | <code>string</code> | Optional. Email address of the service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#email GoogleWorkbenchInstance#email}

---

### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupShieldedInstanceConfig: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#enable_integrity_monitoring GoogleWorkbenchInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#enable_secure_boot GoogleWorkbenchInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#enable_vtpm GoogleWorkbenchInstance#enable_vtpm}

---

### GoogleWorkbenchInstanceGceSetupVmImage <a name="GoogleWorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceGceSetupVmImage: googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family">family</a></code> | <code>string</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name">name</a></code> | <code>string</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project">project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#family GoogleWorkbenchInstance#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}

---

### GoogleWorkbenchInstanceHealthInfo <a name="GoogleWorkbenchInstanceHealthInfo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceHealthInfo: googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo = { ... }
```


### GoogleWorkbenchInstanceTimeouts <a name="GoogleWorkbenchInstanceTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceTimeouts: googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}.

---

### GoogleWorkbenchInstanceUpgradeHistory <a name="GoogleWorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

const googleWorkbenchInstanceUpgradeHistory: googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---


### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">coreCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupAcceleratorConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>

---


### GoogleWorkbenchInstanceGceSetupBootDiskOutputReference <a name="GoogleWorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---


### GoogleWorkbenchInstanceGceSetupContainerImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---


### GoogleWorkbenchInstanceGceSetupDataDisksOutputReference <a name="GoogleWorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput"></a>

```typescript
public readonly externalIpInput: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">resetSubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs"></a>

```typescript
public putAccessConfigs(value: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```typescript
public resetAccessConfigs(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```typescript
public resetSubnet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```typescript
public readonly accessConfigsInput: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>

---


### GoogleWorkbenchInstanceGceSetupOutputReference <a name="GoogleWorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">putAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk">putBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts">putServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">resetAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk">resetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">resetDisablePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">resetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">resetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorConfigs` <a name="putAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```typescript
public putAcceleratorConfigs(value: IResolvable | GoogleWorkbenchInstanceGceSetupAcceleratorConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---

##### `putBootDisk` <a name="putBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```typescript
public putBootDisk(value: GoogleWorkbenchInstanceGceSetupBootDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: GoogleWorkbenchInstanceGceSetupContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```typescript
public putDataDisks(value: GoogleWorkbenchInstanceGceSetupDataDisks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---

##### `putServiceAccounts` <a name="putServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```typescript
public putServiceAccounts(value: IResolvable | GoogleWorkbenchInstanceGceSetupServiceAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```typescript
public putVmImage(value: GoogleWorkbenchInstanceGceSetupVmImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---

##### `resetAcceleratorConfigs` <a name="resetAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```typescript
public resetAcceleratorConfigs(): void
```

##### `resetBootDisk` <a name="resetBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```typescript
public resetBootDisk(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```typescript
public resetDataDisks(): void
```

##### `resetDisablePublicIp` <a name="resetDisablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```typescript
public resetDisablePublicIp(): void
```

##### `resetEnableIpForwarding` <a name="resetEnableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```typescript
public resetEnableIpForwarding(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetServiceAccounts` <a name="resetServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```typescript
public resetServiceAccounts(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```typescript
public resetVmImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">serviceAccounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">acceleratorConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">bootDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">dataDisksInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">disablePublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">enableIpForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">serviceAccountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">disablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">enableIpForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorConfigs`<sup>Required</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```typescript
public readonly acceleratorConfigs: GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```typescript
public readonly bootDisk: GoogleWorkbenchInstanceGceSetupBootDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleWorkbenchInstanceGceSetupContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```typescript
public readonly dataDisks: GoogleWorkbenchInstanceGceSetupDataDisksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: GoogleWorkbenchInstanceGceSetupNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `serviceAccounts`<sup>Required</sup> <a name="serviceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: GoogleWorkbenchInstanceGceSetupServiceAccountsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```typescript
public readonly vmImage: GoogleWorkbenchInstanceGceSetupVmImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `acceleratorConfigsInput`<sup>Optional</sup> <a name="acceleratorConfigsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```typescript
public readonly acceleratorConfigsInput: IResolvable | GoogleWorkbenchInstanceGceSetupAcceleratorConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>[]

---

##### `bootDiskInput`<sup>Optional</sup> <a name="bootDiskInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```typescript
public readonly bootDiskInput: GoogleWorkbenchInstanceGceSetupBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: GoogleWorkbenchInstanceGceSetupContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```typescript
public readonly dataDisksInput: GoogleWorkbenchInstanceGceSetupDataDisks;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---

##### `disablePublicIpInput`<sup>Optional</sup> <a name="disablePublicIpInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```typescript
public readonly disablePublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwardingInput`<sup>Optional</sup> <a name="enableIpForwardingInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```typescript
public readonly enableIpForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | GoogleWorkbenchInstanceGceSetupNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>[]

---

##### `serviceAccountsInput`<sup>Optional</sup> <a name="serviceAccountsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```typescript
public readonly serviceAccountsInput: IResolvable | GoogleWorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: GoogleWorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---

##### `disablePublicIp`<sup>Required</sup> <a name="disablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```typescript
public readonly disablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpForwarding`<sup>Required</sup> <a name="enableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```typescript
public readonly enableIpForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsList <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupServiceAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>[]

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceGceSetupServiceAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>

---


### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### GoogleWorkbenchInstanceGceSetupVmImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```typescript
public resetFamily(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceGceSetupVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---


### GoogleWorkbenchInstanceHealthInfoList <a name="GoogleWorkbenchInstanceHealthInfoList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleWorkbenchInstanceHealthInfoOutputReference <a name="GoogleWorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceHealthInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a>

---


### GoogleWorkbenchInstanceTimeoutsOutputReference <a name="GoogleWorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkbenchInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---


### GoogleWorkbenchInstanceUpgradeHistoryList <a name="GoogleWorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get"></a>

```typescript
public get(index: number): GoogleWorkbenchInstanceUpgradeHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleWorkbenchInstanceUpgradeHistoryOutputReference <a name="GoogleWorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```typescript
import { googleWorkbenchInstance } from '@cdktf/provider-google-beta'

new googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">vmImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```typescript
public readonly snapshot: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```typescript
public readonly vmImage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkbenchInstanceUpgradeHistory;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a>

---



